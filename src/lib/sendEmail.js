import axios from "axios";

export const sendEmail = async ({
  serviceId = "service_wabre9b",
  templateId = "template_sp4ythw",
  publicKey = "JKWvE6lLACENhmYIi",
  senderName = "John Doe",
  senderEmail = "2003monowar@gmail.com",
  recipientEmails,
  details,
}) => {
  console.log("Sending emails with the following data:", {
    senderName,
    senderEmail,
    recipientEmails,
    details,
  });

  if (!recipientEmails || recipientEmails.length === 0) {
    throw new Error("Recipient email list is empty.");
  }

  const emailList = Array.isArray(recipientEmails)
    ? recipientEmails.map((email) => email.trim())
    : [recipientEmails.trim()]; 

  const promises = emailList.map(async (recipientEmail) => {
    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: senderName,
        from_email: senderEmail,
        to_email: recipientEmail,
        first_name: details.firstName,
        last_name: details.lastName,
        city_to_buy: details.cityToBuy,
        looking_to_sell: details.lookingToSell,
        has_agent: details.hasAgent,
        phone_number: details.phoneNumber,
        price_range: details.priceRange,
        additional_details: details.additionalDetails,
        reply_to: senderEmail,
      },
    };

    try {
      const res = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(`Email sent successfully to ${recipientEmail}:`, res.data);
      return res.data;
    } catch (error) {
      console.error(`Failed to send email to ${recipientEmail}:`, error.message);
      throw error;
    }
  });

  return Promise.all(promises);
};



// import axios from "axios";

// export const sendEmailWithAutoReply = async ({
//   serviceId = "service_lhibsmg",
//   adminTemplateId = "template_23wysyq",  // Template for admin notification
//   autoReplyTemplateId = "template_vmx2v4g",  // Auto-reply template ID
//   publicKey = "l1f_f8hjyTWZJ7G6o",
//   senderName,
//   senderEmail,  // User's email (for confirmation)
//   adminEmails,  // Admin/support team emails
//   details,
// }) => {
//   console.log("Sender data:", senderName, senderEmail, adminEmails, details);

//   if (!adminEmails || adminEmails.length === 0) {
//     throw new Error("Admin email list is empty.");
//   }

//   // 1. Send Auto-reply Email to User
//   const autoReplyData = {
//     service_id: serviceId,
//     template_id: autoReplyTemplateId,  // Auto-reply template ID
//     user_id: publicKey,
//     template_params: {
//       from_name: "Your Company Name",
//       to_name: senderName,
//       from_email: adminEmails[0],  // Admin email as sender
//       to_email: senderEmail,  // User's email for confirmation
//       subject: "Thank you for contacting us!",
//       reply_message: "We’ve received your request and will respond shortly!",
//     },
//   };

//   try {
//     console.log("Sending confirmation email to user...");
//     await axios.post("https://api.emailjs.com/api/v1.0/email/send", autoReplyData);
//     console.log("Confirmation email sent to user!");

//     // 2. After confirmation email is sent, send notification email to admin
//     const adminEmailPromises = adminEmails.map(async (adminEmail) => {
//       const adminData = {
//         service_id: serviceId,
//         template_id: adminTemplateId,
//         user_id: publicKey,
//         template_params: {
//           from_name: senderName,
//           from_email: senderEmail,  // User's email as the sender
//           to_email: adminEmail,  // Admin/support email
//           first_name: details.firstName,
//           last_name: details.lastName,
//           city_to_buy: details.cityToBuy,
//           has_agent: details.hasAgent,
//           phone_number: details.phoneNumber || "",
//           message: details.message || "",
//         },
//       };

//       console.log(`Sending admin email to ${adminEmail}...`);
//       return await axios.post("https://api.emailjs.com/api/v1.0/email/send", adminData);
//     });

//     await Promise.all(adminEmailPromises);
//     console.log("Admin emails sent successfully!");
//   } catch (error) {
//     console.error("Failed to send emails:", error);
//     throw error;
//   }
// };
