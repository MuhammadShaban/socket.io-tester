import React from 'react'

const Connection = ({size, color, customStyle}) =>
    <svg style={Object.assign({height: size, fill: color}, customStyle)} version="1.1" x="0px" y="0px" viewBox="9 9 30 30">
        <path
            d="M31.848,27.984l-1.941,1.939c-1.382-1.391-3.294-2.254-5.405-2.254c-2.093,0-3.992,0.85-5.371,2.22l-1.94-1.939
                c1.877-1.867,4.46-3.025,7.31-3.025C27.371,24.925,29.969,26.096,31.848,27.984z M24.502,30.435c-1.331,0-2.538,0.538-3.416,1.409
                l3.45,3.45l3.416-3.416C27.071,30.988,25.851,30.435,24.502,30.435z M9.131,19.891l2.017,2.016
                c3.424-3.416,8.147-5.531,13.354-5.531c5.225,0,9.962,2.129,13.389,5.565l2.016-2.016c-3.943-3.953-9.394-6.402-15.405-6.402
                C18.508,13.521,13.072,15.956,9.131,19.891z M24.502,19.14c-4.445,0-8.476,1.806-11.4,4.722l2.134,2.134
                c2.377-2.368,5.653-3.835,9.266-3.835c3.63,0,6.92,1.479,9.3,3.869l2.133-2.135C33.01,20.959,28.965,19.14,24.502,19.14z"
        />
    </svg>

export default Connection
