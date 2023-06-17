import React from 'react'

function Nav() {
    return (
        <>
            <ol class="flex items-center align p-4 font-bold">
                <li class="inline">Schedulr</li>
                <li class="inline ml-auto mr-5">Register</li>
                <li className="flex items-center drop-shadow hover:drop-shadow-xl">
                    <button className="flex items-center w-24 h-10 mr-2 bg-white rounded-full justify-evenly">
                        <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                        <span>Log In</span>
                    </button>
                </li>
            </ol>
        </>
    )
}

export default Nav