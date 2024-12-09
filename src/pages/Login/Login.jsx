import { Link, useNavigate } from 'react-router-dom';
import { loginValidate } from '../../utils/loginValidate';
import { Field, Formik, Form } from 'formik';
import axios from 'axios';
import "../Login/Login.scss";
import logo from '../../assets/images/logo.png';
import { IoIosArrowBack } from 'react-icons/io';
import { FaUser } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa6';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async (values) => {
    try {
      // Gửi yêu cầu POST đến endpoint đăng nhập
      const response = await axios.get('http://localhost:8080/api/v1/users', {
        username: values.username,
        password: values.password,
      });

      if (response.status === 200) {
        const user = response.data; // Lấy thông tin user từ API
        // Lưu thông tin người dùng vào localStorage
        localStorage.setItem('user', JSON.stringify(user));
        alert(`Đăng nhập thành công! Chào mừng ${user.name}`);
        navigate('/dashboard'); // Chuyển hướng sau khi đăng nhập
      }
    } catch (error) {
      console.error('Lỗi đăng nhập:', error.response?.data || error.message);
      alert('Đăng nhập thất bại! Kiểm tra lại thông tin.');
    }
  };

  const goToForgotPassword = () => {
    navigate('/forgot-password');
  };

  const goToRegister = () => {
    navigate('/signUp');
  };

  const goBack = () => {
    navigate('/');
  };

  return (
    <div className='container'>
      <div className='box'>
        <div className='back'>
          <span onClick={goBack}>
            <IoIosArrowBack /> QUAY LẠI
          </span>
        </div>
        <div className='logo'>
          <img src={logo} alt=' Logo' />
        </div>
        <Formik
          initialValues={{
            username: '',
            password: '',
          }}
          validationSchema={loginValidate()}
          onSubmit={handleLogin} // Sử dụng hàm handleLogin khi submit
        >
          {({ errors, touched }) => (
            <Form>
              <div className='input-group'>
                <Field
                  type='text'
                  placeholder='Tên Đăng Nhập'
                  name='username'
                  autoComplete="off"
                  required
                />
                <span className='icon'>
                  <FaUser />
                </span>
              </div>
              {errors.username && touched.username ? (
                <p className='errorMsg'>{errors.username}</p>
              ) : null}
              <br />
              <div className='input-group pass'>
                <Field
                  type='password'
                  placeholder='Mật khẩu'
                  name='password'
                  required
                />
                <span className='icon'>
                  <FaLock />
                </span>
              </div>
              <br />
              {errors.password && touched.password ? (
                <p className='errorMsg'>{errors.password}</p>
              ) : null}

              <div className='forgot-password' onClick={goToForgotPassword}>
                <Link to='/forgot-password'><i>Quên mật khẩu ?</i></Link>
              </div>
              <button type='submit' className='button'>
                ĐĂNG NHẬP
              </button>
              <div className="linkRegister">
                <p>Bạn chưa có tài khoản?</p>
                <Link to='/signUp' onClick={goToRegister} className='dangky'>Đăng ký</Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
