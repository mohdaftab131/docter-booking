1. Created a NodeJs project with Express JS
2. Installed the following packages for Express JS and Created Some Dummy data in an Array
3. Created API end points to get all the doctor info and Doctor info by ID
    End Ponits to fetch all the doctors http://localhost:3000/api/doctors 
    End Ponits to fetch specific doctors http://localhost:3000/api/doctors/1 

4. Created end point for Booking i have used dummy data, where as in prouction i can use Database
5. This is for Dummy i have created a POST Method and data added will using crul
    example: curl -X POST -H "Content-Type: application/json" -d "{\"doctorId\": 1, \"appointmentTime\": \"2023-10-01T18:00:00\"}" http://localhost:3000/api/appointments
7. Basically this is a simplified outpatient appointment system implemented using Node.js and Express.js. 

8. It provides API endpoints for listing doctors, viewing doctor details, and booking appointments.

9. Dockerized the application by writting a dockerfile building image 
  -> Image build: docker build -t docter-booking .
  -> Running image: docker run -p 3000:3000 docter-booking
10. 



 