import { TextField } from '@material-ui/core'
import React, { useState } from 'react'
import './Log.css'
import Avatar from '@material-ui/core/Avatar'
import DoctorIcon from '../../images/DoctorIcon.png'
import PatientIcon from '../../images/PatientIcon.png'
import AdminIcon from '../../images/AdminIcon.jpeg'
import { useNavigate } from 'react-router-dom'

export const DoctorLogin = (props) => {
  const navigate = useNavigate()
  const login = () => {
    navigate('/PatientLogin')
  }

  let [authMode, setAuthMode] = useState('signin')
  const changeAuthMode = () => {
    setAuthMode(authMode === 'signin' ? 'signup' : 'signin')
  }

  if (authMode === 'signin') {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <div className="container">
              <div className="inner-container">
                <button type="button" class="btn btn-light btn-circle btn-xl">
                  <Avatar
                    alt="Remy Sharp"
                    src={DoctorIcon}
                    style={{
                      width: 70,
                      height: 70,
                      border: '2px solid  black',
                      // boxShadow: '2px 2px 20px grey',
                    }}
                  />
                  <p
                    style={{
                      marginTop: 8,
                      marginLeft: 2,
                      fontWeight: 'bold',
                      fontSize: 18,
                    }}
                  >
                    DOCTOR
                  </p>
                </button>

                <button
                  type="button"
                  class="btn btn-light btn-circle btn-xl"
                  onClick={login}
                >
                  <Avatar
                    alt="Remy Sharp"
                    src={PatientIcon}
                    style={{
                      width: 70,
                      height: 70,
                      border: '2px solid  black',
                      // boxShadow: '2px 2px 20px grey',
                    }}
                  />
                  <p
                    style={{
                      marginTop: 8,
                      marginLeft: 2,
                      fontWeight: 'bold',
                      fontSize: 18,
                    }}
                  >
                    PATIENT
                  </p>
                </button>

                <button type="button" class="btn btn-light btn-circle btn-xl">
                  <Avatar
                    alt="Remy Sharp"
                    src={AdminIcon}
                    style={{
                      width: 70,
                      height: 70,
                      border: '2px solid  black',
                      // boxShadow: '2px 2px 20px grey',
                    }}
                  />
                  <p
                    style={{
                      marginTop: 8,
                      marginLeft: 2,
                      fontWeight: 'bold',
                      fontSize: 18,
                    }}
                  >
                    ADMIN
                  </p>
                </button>
              </div>
            </div>

            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              <span className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>
            <div className="form-group mt-3">
              <TextField
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <TextField
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="text-center mt-2">Forgot password</p>
          </div>
        </form>
      </div>
    )
  }
}
export default DoctorLogin
