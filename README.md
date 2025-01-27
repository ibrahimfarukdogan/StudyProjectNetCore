This project made by Ibrahim Faruk Dogan at UnityVerse Academy Reactjs Course

at backend I used vs2022 and .Net Mvc web api
at frontend I used vscode and reactjs

For running the project you need the nodejs, also you need to open it with vscode and then from the upper tab File->Open Folder then choose frontend folder
then after that open terminal and write "npm install" while at frontend folder. After that run the frontend with writing "npm run dev" at the terminal.

For backend just open it up with vs2022 And from the upper tab: File->Open->Project/Solution and choose the project with clicking the backend folder's backend.sln file
Afer that open package managemenet terminal and while in package terminal, you write "Add-Migration database" and then "update-database". After database is ready, run the project at vs2022. 

But you need to add values for frontend work. So for this you copy BackendDb.bak file from backend folder and paste it to C:\Program Files\Microsoft SQL Server\MSSQL16.MSSQLSERVER\MSSQL\Backup folder
Then in sql server 2022, You right click to backend and from the menu you click: Tasks->Restore->Database and select the BackendDb.bak from the list

Lastly project frontend ui taken from here: https://www.figma.com/design/zxDkWjnvqt5MsuCeiz7d89/Consulting-Webflow-Website-Template-(Community)-(Copy)?node-id=1-5

When it comes to using the website, you can navigate with navbar, also other pages are in the "pages" tab at the navbar. You can click item images to go into their detail pages as well for the blogs/services/casestudy/teams pages.
for logging in, we can use members table's values to login. For example you can use email as: "mail1@mail.com" , and for the password area: "password". This will take you into a basic admin page where you can 
toggle alternative home/footer/navbar elements.
