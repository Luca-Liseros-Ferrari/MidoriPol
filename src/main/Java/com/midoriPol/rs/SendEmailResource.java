package com.midoriPol.rs;

import com.midoriPol.business.SendMail;
import dto.EmailDTO;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("services")
public class SendEmailResource {

    // indirizzo email paolo
    private static final String DESTINATION_EMAIL = "midoripolofficial@gmail.com";

    @POST
    @Path("/sendemail")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response sendEmail(EmailDTO emailDTO) {
        String customerName = emailDTO.getCustomerName();
        String messageToCustomer = emailDTO.getMessageToCustomer().replace("[CUSTOMER_NAME]", customerName);
        String customerEmail = "service request by: " + emailDTO.getMittenteEmail();
        // send email a Paolo
        SendMail.sendEmail (DESTINATION_EMAIL, customerEmail, emailDTO.getSubject() );
        // send email al customer
        SendMail.sendEmailToCustomer (emailDTO.getMittenteEmail(), emailDTO.getObjectCustomerMsg(), messageToCustomer);
        return Response.ok().build();
    }
}
