# back-server-test
Desarrollo de un servicio REST, que pueda ser consumido por un WebApp.
Este servicio REST debe permitir, mediante un comando POST, obtener la hora en formato UTC
de 2 parámetros enviados al servicio: hora y timezone
(por ejemplo: dato1=18:31:45, dato2=-3), deberán devolver la hora calculada, en un archivo json
con el siguiente formato:
    {
      "response": {
      "time": "18:43:00",
      "timezone": "utc"
      }
    }
    
 we assume that the time entered is utc +-00 and the time format is military 
 we assume that the time zone format can be ['-1', '1', '+ 1', '1:00', '- 1:00', '-1:59', '1:59' ] 
 we assume there is no summer or winter time 
