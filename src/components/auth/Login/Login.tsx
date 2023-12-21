import { useState } from "react";
import { Link } from "react-router-dom";
import { ReusableButton } from "../../utils/Components";
import { routeUrl } from "../../../UtilityFunctions/ApiRoutes";
import makeApiCall from "../../../UtilityFunctions/ApiCallHandler";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

interface LoginBody {
  email: string;
  password: string;
}



const Login = () => {
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [loginApiLoading, setLoginApiLoading] = useState(false)


    const handleLogin = () => {
        setLoginApiLoading(true)
        console.log("Email:", email);
        console.log("Password:", password);
        // routeUrl
        // makeApiCall
        const url  =  routeUrl.loginApi
        const body : LoginBody  = {
            email:email,
            password:password
        }
        makeApiCall(url, body, 'POST')
        .then(data => {
            localStorage.setItem('userData', JSON.stringify(data));
            setLoginApiLoading(false)
            toast.success("Login successfull")
            navigateOnBaseOfRole(data.role[0])

            //  navigate("/patient/dashboard");

          console.log('Datareceived:', data.role[0]);
          // Handle the received data
        })
        .catch(error => {
            toast.error("Email or Password Invalid!")
            setLoginApiLoading(false)
          console.error('API call failed:', error);
          // Handle the error (e.g., show an error message to the user)
        });
     
    };

    const navigateOnBaseOfRole = (role: string) => {
      switch (role) {
        case "patient":
          navigate("/patient/dashboard");
          break;

        case "hospital":
          navigate("/patient/hospitals");
          break;

        case "ambulance":
          navigate("/patient/ambulance");
          break;

        default:
          break;
      }
    };

    

    const [tab, setTab] = useState(0);

    const handleTabSwitch = (index: number) => {
        setTab(index);
    };


  

    return (
      <section className="w-full h-full signup_background min-h-screen">
        <div className="w-full h-full ">
          <div className="w-full h-screen  flex flex-col justify-center items-center">
            <h2 className="text-2xl md:text-4xl font-bold text-blue_color text-center">Login</h2>

            <div className="w-full h-auto my-10 flex flex-col justify-center items-center gap-5">
              <div className="w-auto rounded-full text-blue_color h-auto my-2 p-1 bg-sky_color">
                <ReusableButton
                  label="Email"
                  onClick={() => handleTabSwitch(0)}
                  customeStyle={
                    tab === 0
                      ? "bg-white text-blue_color w-80 shadow shadow-lg"
                      : "bg-sky_color text-gray_color w-80"
                  }
                />
                <ReusableButton
                  label="Phone Number"
                  onClick={() => handleTabSwitch(1)}
                  customeStyle={
                    tab === 1
                      ? "bg-white text-blue_color w-80 shadow shadow-lg"
                      : "bg-sky_color text-gray_color w-80"
                  }
                />
              </div>
            </div>

            <form className="w-5/6 md:w-2/5">
              {tab === 0 && (
                <div className="mb-4">
                  <label htmlFor="email" className="block text-blue_color text-sm font-bold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 border border- rounded-full"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              )}

              {tab === 1 && (
                <div className="mb-4">
                  <label
                    htmlFor="phonenumber"
                    className="block text-blue_color text-sm font-bold mb-2">
                    Phone Number
                  </label>
                  <div className="flex w-full justify-start items-center p-1 border rounded-full">

                    <PhoneInput
                      international
                      placeholder="Enter phone number"
                      value={phoneNumber}
                      // onChange={setPhoneNumber}
                      onChange={(value) => setPhoneNumber(value ?? '')}
                      className="p-2  w-full ml-2"
                    />
                  </div>
                </div>
              )}

              <div className="mb-4">
                <label htmlFor="password" className="block text-blue_color text-sm font-bold mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full p-3 border rounded-full"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <Link to="/forgot-password" className="text-blue_color hover:underline text-xs">
                  Forgot Password?
                </Link>
              </div>

              <button
                disabled={loginApiLoading}
                type="button"
                className="w-full bg-blue_color text-white p-2 rounded hover:bg-blue_color_dark"
                onClick={handleLogin}>
                {loginApiLoading ?
                 <div className="flex items-center justify-center">
                 <div className="border-t-2 border-white border-solid h-6 w-6 rounded-full animate-spin"></div>
               </div> 
                 : "Login"}
              </button>
            </form>

            <div className="mt-8">
              <p className="text-center">
                Don't have an account?{" "}
                <Link to="/signup" className="text-blue_color hover:underline">
                  Register here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Login;
