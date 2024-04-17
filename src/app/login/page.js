import React from 'react'

function Login() {
    return (
        <div >
            <div className="bg-[url('../app/assets/img/bg12.png')] bg-no-repeat bg-gray-100 py-20">
                <div className="flex justify-center">
                    <div className="bg-[url('../app/assets/img/bg14.png')] bg-no-repeat w-[615px] h-[566px]">
                    </div>
                    <div>
                        <div className="w-[685px] h-[566px] bg-white flex flex-col gap-5 p-10 rounded-md">
                            <h1 className="font-bold text-2xl ">Welcome back</h1>
                            <p>A whole new online shopping journey start right here.</p>
                            <p className="font-bold text-[#609E45]">_____</p>
                            <div className="flex flex-col  gap-6">


                                <div className="flex flex-col w-[585px] gap-3">
                                    <lable>Email </lable>
                                    <input
                                        type="text"
                                        placeholder="Email"
                                        className="h-[60px] rounded-md border hover:border-[#609E4533] outline-none pl-3 "
                                    ></input>
                                </div>

                                <div className="flex flex-col w-[585px] gap-3">
                                    <lable>Password</lable>
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        className="h-[60px] rounded-md border hover:border-[#609E4533] outline-none pl-3 "
                                    ></input>
                                </div>

                                <div className="flex justify-between">
                                    <div>
                                        <input type="checkbox" />
                                        <p className="inline pl-2">Remamber me</p>
                                    </div>
                                    <p>Forgot password</p>
                                </div>
                                <button className="w-[585px] h-[60px] bg-[#609E45] text-white rounded-md font-semibold text-xl">Login Now</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
