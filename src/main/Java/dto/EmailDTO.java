package dto;

public class EmailDTO {
    private String mittenteEmail;
    private String customerName;
    private String subject;
    private String messageBody;
    private String senderEmail;

    private String senderPassword;

    private String objectCustomerMsg = "Confirmation of Your Mix/Mastering Service Request\n";
    private String messageToCustomer =
            "Dear [CUSTOMER_NAME],\n\n" +
                    "Thank you for reaching out for my mix/mastering services for your track. \n" +
                    "I appreciate your interest and trust in my services.\n\n" +
                    "Your request has been received and will be processed shortly. \n\n" +
                    "Please expect a confirmation email from me with further details on how to proceed with payment and how to send me the individual tracks to be mixed. \n" +
                    "Should you have any specific requirements or questions, please feel free to include them in your reply to this email.\n\n" +
                    "Thank you again for choosing my services. I look forward to working with you and helping bring your music to life.\n" +
                    "Warm regards,\n\n" +
                    "Midori Pol";

    public String getCustomerName() {return customerName;}

    public void setCustomerName(String customerName) {this.customerName = customerName;}

    public String getMessageToCustomer() {
        return messageToCustomer;
    }

    public String getObjectCustomerMsg() {return objectCustomerMsg;}
    public EmailDTO() {}
    public String getMittenteEmail() {return mittenteEmail;}

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

}
