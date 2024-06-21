// class message
package com.midoriPol.model;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Session;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

public class EmailMessage {
    public static Message createMessage(Session session,
                                         String recipientEmail,
                                        String subject,
                                        String messageBody)
            throws MessagingException {
        Message message = new MimeMessage(session);
       // message.setFrom(new InternetAddress(senderEmail));
        message.setRecipients(Message.RecipientType.TO,
                InternetAddress.parse(recipientEmail));
        message.setSubject(subject);
        message.setText(messageBody);
        return message;
    }
}
