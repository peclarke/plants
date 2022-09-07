# Plants: Bomb Squad

## Setting Up Front End
### Starting the Front End
1. Navigate to `src/app`
2. Run `flutter pub get` to retrieve dependencies
3. Start up android emulator via VSCode
4. Navigate to the "Run and debug" menu, select the launch option called "Plant app"
## Setting Up Back end
### Virtual Environment
1. Navigate to `src/server`
2. Run the following command to create the environment: `python3 -m venv .venv`
3. Access the virtual environment:
    Unix / Mac OS X: `source .venv/bin/activate`
    Windows w/ Command Prompt: `path\to\venv\Scripts\activate.bat`
4. Install the packages: `pip3 install -r requirements.txt`

In the future, when you have already installed the packages and created the enivironment,
all you will need to do is start the virtual environment.

### Setting Up MySQL (Locally)
1. Install a local MySQL server on your local machine: https://www.mysql.com/downloads/
2. Install MySQLWorkbench: https://www.mysql.com/products/workbench/
3. Start the MySQL server
4. Connect to your MySQL server from MySQLWorkbench.
5. Create the plants database: `CREATE DATABASE plants`
6. Navigate to `src/server/scripts/sql` and find `/create_combined.sql` and `/insert_combined.sql`
7. Copy the contents of `/create_combined.sql` and execute all commands from MySQLWorkbench to generate the schema.
8. If you desire some dummy data to use, run the contents of `/insert_combined.sql` as seen in step 7.

### Starting The Back End Server
1. Navigate to `src/server`
2. Access the virtual environment. See above for more information.
3. Run `python3 app.py`
4. Navigate to `http://127.0.0.1:5000`
