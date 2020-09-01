import React from 'react';

function Account() {
    return (
        <div>
            <h2 className="  ">My details</h2>
            <div>
                <img className="" src="" alt="" />
                <input type="file" id="myFile" name="filename" />
            </div>
            <div>
                <div>First name:<input type="text"/></div>
                <div>Last name:<input type="text"/></div>
                <div>Mobile number:<input type="text"/></div>
            </div>
            <div>
                <div>Email:<input type="text"/></div>
                <div>Location:<input type="text"/></div>
            </div>
            <div>
                <div>ABN:<input type="text"/></div>
                <div>Company Name:<input type="text"/></div>
            </div>
            <button>Submit</button>
        </div>
    );
}

export default Account;
