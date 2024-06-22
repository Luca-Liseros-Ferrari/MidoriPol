package com.midoriPol.business;

import com.midoriPol.model.EmailMessage;
import com.midoriPol.model.MyAuthenticator;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Session;
import javax.mail.Transport;
import java.util.Properties;
import javax.mail.Authenticator;


public class SendMail {
    private static String psw() {
        String password = System.getenv("EMAIL_PASSWORD");
        System.out.println
                ("Retrieved password: " + (password != null ? password : "No password specified"));
        return password;
    }


private static Properties properties () {
    Properties props = new Properties();
    props.put("mail.smtp.host", "smtp.gmail.com"); // SMTP server
    props.put("mail.smtp.port", "587"); // Port for TLS
    props.put("mail.smtp.auth", "true"); // Enable authentication
    props.put("mail.smtp.starttls.enable", "true"); // Enable TLS
    return props;
  }
  public static void sendEmail(String destinationEmail,
                               String mittente,
                               String servizioRichiesto) {

    Authenticator authenticator = new MyAuthenticator(destinationEmail, psw());
    Session session = Session.getInstance(properties(), authenticator);

    try {
      Message message = EmailMessage.createMessage
              (session, destinationEmail, mittente, servizioRichiesto);

      Transport.send(message);

      System.out.println("Email sent successfully from form.");

    } catch (MessagingException e) {
      e.printStackTrace();
      System.err.println("Error sending email: " + e.getMessage());
    }
  }

  public static void sendEmailToCustomer
          (String mittenteEmail, String objectMsg, String messageToCustomer) {
    final String senderEmail = "midoripolofficial@gmail.com";

    Authenticator authenticator = new MyAuthenticator(senderEmail, psw());
    Session session = Session.getInstance(properties(), authenticator);

    try {
      Message message = EmailMessage.createMessage
              (session, mittenteEmail, objectMsg, messageToCustomer);
      Transport.send(message);
      System.out.println("Email sent successfully to customer.");
    } catch (MessagingException e) {
      e.printStackTrace();
      System.err.println("Error sending email: " + e.getMessage());
    }

  }
}
