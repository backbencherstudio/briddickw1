// import axios from "axios";

// export const sendOtpMessage = async (
//   recipientPhone,
//   message,
//   accountSid,
//   authToken,
//   twilioNumber
// ) => {
//   const url = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`;

//   const data = new URLSearchParams();
//   data.append("To", recipientPhone);
//   data.append("From", twilioNumber);
//   data.append("Body", message);

  // try {
  //   const response = await axios.post(url, data, {
  //     auth: {
  //       username: accountSid,
  //       password: authToken,
  //     },
  //     headers: {
  //       "Content-Type": "application/x-www-form-urlencoded",
  //     },
  //   });

//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

import axios from "axios";
// import dotenv from "dotenv";

// dotenv.config();

const sendOtpMessage = async (recipientPhone, message) => {
  console.log("Data aiche", recipientPhone, message);

  const accountSid = import.meta.env.TWILIO_ACCOUNT_SID;
  const authToken = import.meta.env.TWILIO_AUTH_TOKEN;
  const twilioNumber = import.meta.env.TWILIO_PHONE_NUMBER;


  const url = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`;

  const data = new URLSearchParams();
  data.append("To", recipientPhone);
  data.append("From", twilioNumber);
  data.append(
    "Body",
    `Your OTP Code: ${message}
    This code is valid for the next 10 minutes. For your security, do not share it with anyone.   
    Thank you 
    Jibrado`
  );

  try {
    const response = await axios.post(url, data, {
      auth: {
        username: accountSid,
        password: authToken,
      },
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    console.log("Response from Twilio", response);
    return response.data;
  } catch (error) {
    console.log("Error in sending OTP message", error);
    throw error;
  }
};

export default sendOtpMessage;
