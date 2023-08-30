
import React, { useState, useEffect } from 'react';
import Footer from '../navbar-footer/footer';

import NavbarPosLogin from '../navbar-footer/logged-navbar';
import img from "../../assets/images/user.png"
import { useLocation } from 'react-router-dom'; // Import useLocation
import { toast } from "react-toastify";
import {ToastContainer} from 'react-toastify'
import useAuth from '../../hooks/useAuth';
import axios from "axios";

function Conta() {
  const location = useLocation();
  //const queryParams = new URLSearchParams(location.search);
  //toast.success("Login sucessful");
  //const email = queryParams.get('email');
  //const user = useAuth();
  const {user} = useAuth();
  const {userData} = useAuth();
  const [activeTab, setActiveTab] = useState('account');
  //const { data: userIdData } =  await axios.get(`http://localhost:8800/getNome?email=${user}`);
  //const nome = userIdData.nome;
  const [userName, setUserNome] = useState('');

useEffect(() => {
  const fetchUserIdData = async () => {
    try {
      const { data: userName } = await axios.get(`http://localhost:8800/getNome?email=${user}`);
      //setUserIdData(nome.nome);
      setUserNome(userName.sigla.nome); // Set usernome using the fetched nome
      console.log(userName.sigla.nome);
    } catch (error) {
      console.error('Error fetching userIdData:', error);
    }
  };

  fetchUserIdData();
}, [user]);
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      
      <section className="py-5 my-5">
        <div className="container">
        {user ? (
        <h1 className="mb-5">Configurações da Conta, Olá {userName}</h1>
      ) : (
        <h1 className="mb-5">Configurações da Conta</h1>
      )}
          <div className="bg-white shadow rounded-lg d-block d-sm-flex">
            <div className="profile-tab-nav border-right">
              <div className="p-4">
                <div className="img-circle text-center mb-3">
                  <img src={img} alt="Image" style={{width: '150px', height: '150px'}} className="shadow" />
                </div>
                <h4 className="text-center">{user}</h4>
              </div>
              <div
                className="nav flex-column nav-pills"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <a
                  className={`nav-link ${
                    activeTab === 'account' ? 'active' : ''
                  }`}
                  id="account-tab"
                  data-toggle="pill"
                  href="#account"
                  role="tab"
                  aria-controls="account"
                  aria-selected={activeTab === 'account'}
                  onClick={() => handleTabClick('account')}
                >
                  <i className="fa fa-home text-center mr-1"></i>
                  Conta
                </a>
                <a
                  className={`nav-link ${
                    activeTab === 'password' ? 'active' : ''
                  }`}
                  id="password-tab"
                  data-toggle="pill"
                  href="#password"
                  role="tab"
                  aria-controls="password"
                  aria-selected={activeTab === 'password'}
                  onClick={() => handleTabClick('password')}
                >
                  <i className="fa fa-key text-center mr-1"></i>
                  Senha
                </a>
                <a
                  className={`nav-link ${
                    activeTab === 'security' ? 'active' : ''
                  }`}
                  id="security-tab"
                  data-toggle="pill"
                  href="#security"
                  role="tab"
                  aria-controls="security"
                  aria-selected={activeTab === 'security'}
                  onClick={() => handleTabClick('security')}
                >
                  <i className="fa fa-user text-center mr-1"></i>
                  Segurança
                </a>
                <a
                  className={`nav-link ${
                    activeTab === 'application' ? 'active' : ''
                  }`}
                  id="application-tab"
                  data-toggle="pill"
                  href="#application"
                  role="tab"
                  aria-controls="application"
                  aria-selected={activeTab === 'application'}
                  onClick={() => handleTabClick('application')}
                >
                  <i className="fa fa-tv text-center mr-1"></i>
                  Aplicação
                </a>
                <a
                  className={`nav-link ${
                    activeTab === 'notification' ? 'active' : ''
                  }`}
                  id="notification-tab"
                  data-toggle="pill"
                  href="#notification"
                  role="tab"
                  aria-controls="notification"
                  aria-selected={activeTab === 'notification'}
                  onClick={() => handleTabClick('notification')}
                >
                  <i className="fa fa-bell text-center mr-1"></i>
                  Notificação
                </a>
              </div>
            </div>
            <div className="tab-content p-4 p-md-5" id="v-pills-tabContent">
              <div
                className={`tab-pane fade ${
                  activeTab === 'account' ? 'show active' : ''
                }`}
                id="account"
                role="tabpanel"
                aria-labelledby="account-tab"
              >
                <h3 className="mb-4">Informações da Conta</h3>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Nome completo</label>
                      <input
                        type="text"
                        className="form-control"
                       
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="text"
                        className="form-control"
                        
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>CPF</label>
                      <input
                        type="text"
                        className="form-control"
                        
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Telefone</label>
                      <input
                        type="text"
                        className="form-control"
                        
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Nova Senha</label>
                      <input
                        type="password"
                        className="form-control"
                        
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <button style={{marginTop:'10px'}} className="btn btn-dark">Atualizar</button>
                </div>
              </div>
              <div
                className={`tab-pane fade ${
                  activeTab === 'password' ? 'show active' : ''
                }`}
                id="password"
                role="tabpanel"
                aria-labelledby="password-tab"
              >
                <h3 className="mb-4">Password Settings</h3>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Old password</label>
                      <input
                        type="password"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>New password</label>
                      <input
                        type="password"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Confirm new password</label>
                      <input
                        type="password"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <button className="btn btn-primary">Update</button>
                  <button className="btn btn-light">Cancel</button>
                </div>
              </div>
              <div
                className={`tab-pane fade ${
                  activeTab === 'security' ? 'show active' : ''
                }`}
                id="security"
                role="tabpanel"
                aria-labelledby="security-tab"
              >
                <h3 className="mb-4">Security Settings</h3>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Login</label>
                      <input
                        type="text"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Two-factor auth</label>
                      <input
                        type="text"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="recovery"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="recovery"
                        >
                          Recovery
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <button className="btn btn-primary">Update</button>
                  <button className="btn btn-light">Cancel</button>
                </div>
              </div>
              <div
                className={`tab-pane fade ${
                  activeTab === 'application' ? 'show active' : ''
                }`}
                id="application"
                role="tabpanel"
                aria-labelledby="application-tab"
              >
                <h3 className="mb-4">Application Settings</h3>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="app-check"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="app-check"
                        >
                          App check
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck2"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck2"
                        >
                          Lorem ipsum dolor sit.
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <button className="btn btn-primary">Update</button>
                  <button className="btn btn-light">Cancel</button>
                </div>
              </div>
              <div
                className={`tab-pane fade ${
                  activeTab === 'notification' ? 'show active' : ''
                }`}
                id="notification"
                role="tabpanel"
                aria-labelledby="notification-tab"
              >
                <h3 className="mb-4">Notification Settings</h3>
                <div className="form-group">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="notification1"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="notification1"
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum accusantium accusamus, neque cupiditate quis
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="notification2"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="notification2"
                    >
                      hic nesciunt repellat perferendis voluptatum totam porro eligendi.
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="notification3"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="notification3"
                    >
                      commodi fugiat molestiae tempora corporis. Sed dignissimos suscipit
                    </label>
                  </div>
                </div>
                <div>
                  <button className="btn btn-primary">Update</button>
                  <button className="btn btn-light">Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}

export default Conta;

