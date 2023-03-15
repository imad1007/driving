import React from 'react'

export default function Loading() {
    return (
        <div className="content">
            <div class="d-flex justify-content-center">
                <div class="spinner-border" role="status" style={{color:"#ffbb00",marginTop:'20%',padding:'30px'}} >
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    )
}
