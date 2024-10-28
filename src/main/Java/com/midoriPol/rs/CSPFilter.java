package com.midoriPol.rs;
import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class CSPFilter implements Filter {

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        // Inizializzazione, se necessaria
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
            throws IOException, ServletException {
        if (response instanceof HttpServletResponse) {
            HttpServletResponse httpResponse = (HttpServletResponse) response;

            // Definisci l'hash come variabile
            String highestThrone = "'sha256-G1Ug9Ex734sdQ+1HuVEiri4ZOzso22YaRkSMmxrSzoQ='";
            String ladyBastet = "'sha256-IPP9q1396Yy049JbU3r9NZo6RHEOICSS5sk4umTH57Q='";
            String meMyselfAndI = "'sha256-Hmf0JN7LpcmDWxGQqev7xJGEfBN2I2tl+jBv+i5HuUY='";
            String rulers = "'sha256-xU16pXbAGkyipOy2tTGT708IEIfEiuVI6kFpcQ7hq7Q='";
            String siren = "'sha256-H6VWjk85KNskJyo9f7yztBAWXvdwAgZnKcxP4N6SULM='";
            String toxic = "'sha256-QA/Z8ghx8mgzoA5K4tZYn86TdPD5H/+68ZefpyajQ5c='";
            String waves = "'sha256-YNJ++TofntcW64VAmG6Nce9WSo45wSK+NAn7WyVKCtg='";

            // Imposta l'header CSP includendo la variabile e garantendo che gli spazi siano corretti
            httpResponse.setHeader("Content-Security-Policy",
                    "style-src 'self' 'unsafe-hashes' "
                            + highestThrone + " "
                            + ladyBastet + " "
                            + meMyselfAndI + " "
                            + rulers + " "
                            + siren + " "
                            + toxic + " "
                            + waves + ";"
            );


            // Set other security headers as needed
            httpResponse.setHeader("Strict-Transport-Security", "max-age=31536000; includeSubDomains; preload");
            httpResponse.setHeader("X-Frame-Options", "DENY");
            httpResponse.setHeader("X-Content-Type-Options", "nosniff");
            httpResponse.setHeader("Referrer-Policy", "no-referrer");
            httpResponse.setHeader("Permissions-Policy", "geolocation=()");
        }

        // Continue the filter chain
        chain.doFilter(request, response);
    }

    @Override
    public void destroy() {
        // Cleanup, se necessario
    }
}
