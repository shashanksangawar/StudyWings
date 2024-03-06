import { useEffect, useState } from "react";
import axios from "axios";

const UserDocs = () => {
    const [data, setData] = useState([]);

    const fetchdata = async () => {
        const student_id = parseInt(sessionStorage.getItem("Student_id"));
        console.log(student_id);
        const res = await axios.post("http://localhost:3000/api/student/account/document/fetch", {
            user: student_id
        });
        setData(res.data.output);
    };

    useEffect(() => {
        fetchdata();
    }, []);

	async function acceptStudent(){
		const app_id = parseInt(sessionStorage.getItem("Application_id"));
		const accept_response = await axios.post("http://localhost:3000/api/application/update", {
            app_id: app_id,
			app_status: "Accepted"
        });

		const alert_msg = document.getElementById('notification');
		try
		{
			if (accept_response.status==200)
			{
				alert_msg.innerHTML = `
						<div class="fixed top-16 bg-green-100 w-full border border-green-400 text-green-700 px-4 py-3 rounded">
							<div class="flex justify-center items-center">
								<span class="text-3xl">Student Accepted</span>
							</div>
						</div>
					`
				window.location.href = "/application/university";
			}
			else
			{
				alert_msg.innerHTML = `
						<div class="fixed top-16 bg-red-100 w-full border border-red-400 text-red-700 px-4 py-3 rounded">
							<div class="flex justify-center items-center">
								<span class="text-3xl">${accept_response.data.message}</span>
							</div>
						</div>
					`
			}
		}
		catch(error)
		{
			alert_msg.innerHTML = `
					<div class="fixed top-16 bg-red-100 w-full border border-red-400 text-red-700 px-4 py-3 rounded">
						<div class="flex justify-center items-center">
							<span class="text-3xl">${error}</span>
						</div>
					</div>
				`
		}
	}

	async function rejectStudent(){
		const app_id = parseInt(sessionStorage.getItem("Application_id"));
		const accept_response = await axios.post("http://localhost:3000/api/application/update", {
            app_id: app_id,
			app_status: "Rejected"
        });

		const alert_msg = document.getElementById('notification');
		try
		{	
			if (accept_response.status==200)
			{
				alert_msg.innerHTML = `
						<div class="fixed top-16 bg-green-100 w-full border border-green-400 text-green-700 px-4 py-3 rounded">
							<div class="flex justify-center items-center">
								<span class="text-3xl">Student Rejected</span>
							</div>
						</div>
					`
				window.location.href = "/application/university";
			}
			else
			{
				alert_msg.innerHTML = `
						<div class="fixed top-16 bg-red-100 w-full border border-red-400 text-red-700 px-4 py-3 rounded">
							<div class="flex justify-center items-center">
								<span class="text-3xl">${accept_response.data.message}</span>
							</div>
						</div>
					`
			}
		}
		catch(error)
		{
			alert_msg.innerHTML = `
					<div class="fixed top-16 bg-red-100 w-full border border-red-400 text-red-700 px-4 py-3 rounded">
						<div class="flex justify-center items-center">
							<span class="text-3xl">${error}</span>
						</div>
					</div>
				`
		}
	}

    return (
        <div className="w-full h-auto mt-[3rem] flex justify-center items-center bg-[--background]">
			<div id="notification" className="relative z-10 flex justify-center items-center"></div>
			<div className="w-[90%] h-auto mx-auto bg-[--background] flex gap-[3rem] flex-col justify-center items-center">
                <div className="w-full h-[30%] bg-[specify-background-color-here] text-[--text] flex justify-center items-center">
                    <div className="w-[200px] h-auto flex justify-center items-center">
                        <div id="profile" className="flex gap-8 flex-col justify-center items-center border-black border">
                            {data.map((res) => (
                                <div key={res.StudentID} className="first text-center">
                                    {res.Student_DocumentName}
                                    <img className="rounded-full w-[100%]" src={res.Student_Document} alt={res.Student_DocumentName} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
				<div id="buttons" className="flex gap-8 flex-row justify-center items-center">
					<button onClick={()=>{acceptStudent()}} className="px-4 py-2 my-3 bg-green-600 text-white rounded-lg" type="submit">
						Accept
					</button>
					<button onClick={()=>{rejectStudent()}} className="px-4 py-2 my-3 bg-red-600 text-white rounded-lg" type="submit">
						Reject
					</button>
				</div>
            </div>
        </div>
    );
};

export default UserDocs;
