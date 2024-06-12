# IC-CANADA CRUD Operations with Django, Angular, and PostgreSQL

This project demonstrates CRUD operations using a Django backend with a PostgreSQL database and an Angular frontend.

## Prerequisites

- Python 3.x
- Node.js and npm
- Angular CLI
- PostgreSQL

## Installation

### Backend Setup

1. **Install Python dependencies:**

    ```sh
    pip install -r requirements.txt
    ```

2. **Set up PostgreSQL:**

    ```sh
    sudo apt install postgresql postgresql-contrib
    psql --version
    ```

3. **Start PostgreSQL service:**

    ```sh
    sudo service postgresql start
    sudo service postgresql status
    sudo service postgresql restart
    ```

4. **Access PostgreSQL as the `postgres` user:**

    ```sh
    sudo -u postgres psql
    ```

    Inside the PostgreSQL shell, you may need to create a new database and user. Here's an example:

    ```sql
    CREATE DATABASE your_database_name;
    CREATE USER your_username WITH PASSWORD 'your_password';
    ALTER ROLE your_username SET client_encoding TO 'utf8';
    ALTER ROLE your_username SET default_transaction_isolation TO 'read committed';
    ALTER ROLE your_username SET timezone TO 'UTC';
    GRANT ALL PRIVILEGES ON DATABASE your_database_name TO your_username;
    ```

5. **Apply database migrations:**

    ```sh
    cd backend/
    python3 manage.py makemigrations
    python3 manage.py migrate
    ```

6. **Run the Django development server:**

    ```sh
    python3 manage.py runserver
    ```

### Frontend Setup

1. **Navigate to the frontend directory:**

    ```sh
    cd frontend/
    ```

2. **Install Node.js dependencies:**

    ```sh
    npm install
    ```

3. **Start the Angular development server:**

    ```sh
    ng serve
    ```

## Usage

Once both the backend and frontend servers are running, you can access the application in your web browser at `http://localhost:4200`.

### Features

- **View Users:** Displays a list of all users.
- **Add User:** Provides a form to add a new user.
- **Edit User:** Allows editing of user details.
- **Delete User:** Removes a user from the database.
- **Send Email:** (Optional) Sends an email to a user.

### Notes

- Ensure PostgreSQL is running before starting the backend server.
- The frontend communicates with the backend through API endpoints defined in Django.