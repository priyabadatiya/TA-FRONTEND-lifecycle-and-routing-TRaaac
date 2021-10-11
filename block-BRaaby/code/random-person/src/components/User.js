function User(props) {
    let fullName = props.user.name.title + " " + props.user.name.first + " " + props.user.name.last;
    return (
        <article>
        <div className='top'>
          <div className='h-40 w-40 rounded-full absolute border-2 top-5 left-40 shadow-md'>
            <img
              src={props.user.picture.large}
              alt='profile'
              className='w-full rounded-full'
            />
          </div>
        </div>
        <div className='mb-10 text-center px-10 py-10'>
          <h5 className="font-medium">{props.valueTitle}</h5>
          <h3 className="text-2xl font-bold mb-10">{props.value}</h3>
          <div className='buttons flex justify-between text-xl text-gray-500'>
            <i
              onClick={(e) =>
                props.handleChange(e, 'user')
              }
              className= {props.content === 'user' ? 'fas fa-user active' : "fas fa-user"}
              
            ></i>
            <i
              onClick={(e) =>
                props.handleChange(e, 'mail')
              }
              className='fas fa-envelope-open'
            ></i>
            <i
              onClick={(e) =>
                props.handleChange(e, 'dob')
              }
              className='fas fa-calendar-times'
            ></i>
            <i
              onClick={(e) =>
                props.handleChange(e, 'address')
              }
              className='fas fa-map'
            ></i>
            <i
              onClick={(e) =>
                props.handleChange(e, 'phone')
              }
              className='fas fa-phone'
            ></i>
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <button
            onClick={props.getRandomeUser}
            href='#'
            className='bg-purple-500 text-white px-3 py-2 rounded-lg font-bold shadow-lg'
          >
            Get Randome user
          </button>
        </div>
      </article>
    )
}
export default User; 