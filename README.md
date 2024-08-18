
# CareConnect

CareConnect is a web application that allows patients to schedule appointments with doctors at a clinic. The application is built using ReactJS for the frontend, and uses a Spring Boot backend with a MySQL database. The application also includes email verification, which is used to confirm doctor approval and appointment booking.


## Getting Started
To get started with the application, clone the repository to your local machine:
https://github.com/vivekvinchhi/careconnects.git


Once you have cloned the repository, navigate to the project directory and install the dependencies:
```bash
cd Front-end
npm install
```

Finally, start the development server:
```bash
npm start
```

The application should now be accessible at http://localhost:3000
## Backend
The CareConnect backend is built using Spring Boot, and uses a MySQL database to store the application data. To run the backend, follow these steps:

1 Install MySQL and create a new database called careconnect.

2 Open the src/main/resources/application.properties file and replace the spring.datasource.username and spring.datasource.password properties with your MySQL username and password.

3 Navigate to the backend directory and run ./mvnw spring-boot:run to start the backend server.

The backend API should now be accessible at http://localhost:8080/api.
## Email Verification

CareConnect uses email verification to confirm doctor approval and appointment booking. When a doctor signs up for the application, an email is sent to the clinic administrator to confirm the doctor's approval. When a patient schedules an appointment, an email is sent to the patient to confirm the appointment booking.
## What Features Will You Find Here?

- Dynamic home page, serving as the landing page for all users.
- Admin, Doctor and Patient dashboards.
- Patient and Doctor login page with professional handling of all kinds of validations.
- Ability for a patient to select an appointment and view doctor information, as well as their own appointment information.
- Option to select a doctor and view appointment date and time.
- View the schedule of a particular doctor.
- View for Doctor in Doctor Dashboard where all the pending appointments and approved appointments will be display.
- Responsive design with a dynamic header and preloader.



## Technologies Used
CareConnect is built using the following technologies:

Front End :
- React
- JavaScript(ES6)
- React-Bootstrap
- Html
- CSS5
- Materail UI 
- Bootstrap
- Formik
- Yup
- Axios
- React toastify

Back-End:

- SpringBoot
- MySQL
- Email verification
- Cors



## Overview page
![Overview page](https://user-images.githubusercontent.com/102732439/236602121-0d3e6d80-1203-496a-89b4-7d36cb3c69d1.png)


## Sign Up page
![Signup](https://user-images.githubusercontent.com/102732439/236602155-c1f23b39-f80f-4c2f-8eef-0075807c89d3.png)

## Sign In page
![doctor Signin](https://user-images.githubusercontent.com/102732439/236602178-7a77b5dc-08f3-45c2-b3f9-d910af214571.png)

![Patient signin](https://user-images.githubusercontent.com/102732439/236602193-0029fd3e-d03e-421e-8ce4-53946c2d5181.png)

## Booking Appointment 
![Bookappointment](https://user-images.githubusercontent.com/102732439/236602294-aeb0e4bc-0e64-4d24-a898-40fef6a1806c.png)

## Doctor Registration page
![Doctor form](https://user-images.githubusercontent.com/102732439/236602320-2fca1f11-3d1d-4acc-b55c-5dddd7365459.png)







## License
CareConnect is licensed under the [MIT](https://choosealicense.com/licenses/mit/) License. See the LICENSE file for details.



