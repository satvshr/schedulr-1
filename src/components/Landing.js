import React from 'react'

function Landing() {

    return (
        <div class="flex h-screen">
            <div class="m-auto text-center">
                <h1 class="text-7xl md:text-9xl">Organization starts here.</h1>
                <button class="border-4 p-3 hover:bg-black hover:text-white" onClick={event => window.location.href='/api/auth/login'}>GET STARTED</button>
            </div>
        </div>
    )
}

export default Landing