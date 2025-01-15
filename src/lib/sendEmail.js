import axios from "axios";

export const sendEmail = async ({
  serviceId = "service_lhibsmg",
  templateId = "template_23wysyq",
  publicKey = "l1f_f8hjyTWZJ7G6o",
  senderName,
  senderEmail,
  recipientEmails,
  details, // Assuming `details` object contains INITIAL_FORM_DATA fields
}) => {
  if (!recipientEmails || recipientEmails.length === 0) {
    throw new Error("Recipient email list is empty.");
  }

  const emailList = recipientEmails.map((email) => email.trim());
  const promises = emailList.map(async (recipientEmail) => {
    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: senderName,
        from_email: senderEmail,
        to_email: "tqmhosain@gmail.com",
        first_name: details.firstName,
        last_name: details.lastName,
        city_to_buy: details.cityToBuy,
        has_agent: details.hasAgent,
        looking_to_sell: details.lookingToSell,
        phone_number: details.phoneNumber,
        price_range: (details.priceRange || []).join(", "),
        additional_details: details.additionalDetails,
        message: details.message, // Additional message from the user
      },
    };

    try {
      const res = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send", 
        data
      );
      console.log(`Email sent to ${recipientEmail}:`, res);
      return res;
    } catch (error) {
      console.error(`Failed to send email to ${recipientEmail}:`, error);
      throw error;
    }
  });

  return Promise.all(promises);
};
