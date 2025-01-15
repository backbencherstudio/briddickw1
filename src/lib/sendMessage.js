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

//   try {
//     const response = await axios.post(url, data, {
//       auth: {
//         username: accountSid,
//         password: authToken,
//       },
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded",
//       },
//     });

//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

import axios from "axios";

const sendOtpMessage = async (recipientPhone, message) => {
  console.log("Data aiche", recipientPhone, message);
  const accountSid = "AC32df65a75d00ed7b909873221873d307"; // Use environment variable
  const authToken = "689349863543d6ff3b13f6c3267e1b61"; // Use environment variable
  const twilioNumber = "+18786887838"; // Use environment variable

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

    return response.data;
  } catch (error) {
    throw error;
  }
};

export default sendOtpMessage;
