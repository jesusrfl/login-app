package io.swagger.api.impl;

import io.swagger.api.*;
import io.swagger.model.*;

import io.swagger.model.Data;

import java.util.List;
import io.swagger.api.NotFoundException;

import java.io.InputStream;
import java.util.HashMap;

import org.glassfish.jersey.media.multipart.FormDataContentDisposition;

import javax.ws.rs.core.Response;
import javax.ws.rs.core.SecurityContext;

@javax.annotation.Generated(value = "class io.swagger.codegen.languages.JavaJerseyServerCodegen", date = "2017-06-08T18:24:00.684Z")
public class LoginApiServiceImpl extends LoginApiService {
  
    private HashMap<String, String> datos;
    
    public LoginApiServiceImpl() {
      datos = new HashMap<>();
      datos.put("correo@correo.com", "correo1234");
      datos.put("datos@gmail.com", "datos1234");
      datos.put("prueba@prueba.com", "prueba1234");
    }
  
    @Override
    public Response loginPost(Data body, SecurityContext securityContext) 
        throws NotFoundException {
        try {
          String email = body.getEmail();
          String password = body.getPassword();
          System.out.println("DATA: " + email + ", " + password);
        
          if (datos.containsKey(email) && datos.get(email).equals(password)) {
            return Response.ok().entity(new ApiResponseMessage(200, "Logeado!"))
                .build();
          } 
        
          return Response.ok()
            .entity(new ApiResponseMessage(ApiResponseMessage.ERROR, 
                "Datos incorrectos."))
            .build();
          
       } catch(NullPointerException ex) {
         return Response.ok()
            .entity(new ApiResponseMessage(ApiResponseMessage.ERROR, 
                "No se recibieron los datos."))
            .build();
       }
        
    }
}
