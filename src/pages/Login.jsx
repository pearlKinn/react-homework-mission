import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import pb from '@/api/pocketbase';
import Logo from '@/components/Logo';
import { emailReg, pwReg } from '@/utils/validation';
import debounce from '@/utils/debounce';
import { toast } from 'react-hot-toast';

function Login() {
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });

  const isActive = !!(formState.email && formState.password);

  useEffect(() => {
    if (!formState.email) {
      setEmailError('이메일을 입력해주세요.');
    } else if (!emailReg(formState.email)) {
      setEmailError('올바른 이메일 형식을 입력해주세요');
    } else {
      setEmailError('');
    }

    if (!formState.password) {
      setPasswordError('비밀번호를 입력해주세요.');
    } else if (!pwReg(formState.password)) {
      setPasswordError('6~16자의 영문, 숫자, 특수문자를 포함해주세요.');
    } else {
      setPasswordError('');
    }
  }, [formState]);

  const handleSignIn = async (e) => {
    e.preventDefault();

    const { email, password } = formState;
    try {
      await pb.collection('users').authWithPassword(email, password);
      toast.success('로그인에 성공했습니다', {
        position: 'top-center',
        ariaProps: {
          role: 'status',
          'aria-live': 'polite',
        },
      });
      navigate('/');
    } catch (error) {
      toast.error('로그인에 실패하였습니다', {
        position: 'top-center',
        ariaProps: {
          role: 'alert',
          'aria-live': 'polite',
        },
      });
      console.error(error);
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleDebounceInput = debounce(handleInput, 500);

  return (
    <div
      role="screenWrapper"
      className="h-screen bg-gray-100 h-[calc(var(--vh, 1vh) * 100)]"
    >
      <h2 hidden>로그인</h2>
      <section>
        <div className="flex flex-col items-center pt-12">
          <Link to="/" className="block">
            <Logo width={'135px'} height={'20px'} className="" />
          </Link>
          <form onSubmit={handleSignIn} className="w-80">
            <div className="mt-10">
              <label htmlFor="email" className="text-xs font-semibold">
                이메일 주소
              </label>
              <input
                type="email"
                name="email"
                id="email"
                defaultValue={formState.email}
                onChange={handleDebounceInput}
                className="border border-gray-300 rounded-lg w-full p-3 mt-2 text-sm placeholder-gray-500 focus:outline-none focus:border-gray-600 focus:ring-0"
                placeholder="이메일"
              />
              {formState.email && (
                <div className="flex gap-1 mt-2 text-xs lg:text-sm text-red-500">
                  {emailReg(formState.email) ? (
                    ''
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="currentColor"
                      className="w-4 h-auto"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4m0 4h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"
                      />
                    </svg>
                  )}
                  {emailError}
                </div>
              )}
              <div className="mt-4 relative">
                <label className="text-xs font-semibold">비밀번호</label>
                <input
                  type="password"
                  name="password"
                  defaultValue={formState.password}
                  onChange={handleDebounceInput}
                  className="border border-gray-300 rounded-lg p-3 mt-2 w-full text-sm placeholder-gray-500 focus:outline-none focus:border-gray-600 focus:ring-0"
                  placeholder="비밀번호"
                />
                {formState.password && (
                  <div className="flex gap-1 mt-2 text-xs lg:text-sm text-red-500">
                    {pwReg(formState.password) ? (
                      ''
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="currentColor"
                        className="w-4 h-auto"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4m0 4h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"
                        />
                      </svg>
                    )}
                    {passwordError}
                  </div>
                )}
              </div>
            </div>
            <div className="mt-8">
              <button
                type="submit"
                className={
                  isActive
                    ? 'flex justify-center py-3 items-center w-full rounded-lg bg-orange-400 outline-none text-white font-semibold'
                    : 'flex justify-center py-3 items-center w-full rounded-lg bg-orange-400 outline-none opacity-50 cursor-not-allowed text-white font-semibold'
                }
              >
                로그인 하기
              </button>
              <ul className="flex justify-center mt-4">
                <li className="flex items-center">
                  <Link
                    to="/users/find-user-email"
                    className="text-xs text-gray-500 font-medium outline-none"
                  >
                    아이디 찾기
                  </Link>
                </li>
                <li className="flex items-center">
                  <span className="mx-6 inline-block w-0.5 h-3 bg-gray-300"></span>
                </li>
                <li className="flex items-center">
                  <Link
                    to="/users/reset-user-password"
                    className="text-xs text-gray-500 font-medium outline-none"
                  >
                    비밀번호 찾기
                  </Link>
                </li>
                <li className="flex items-center">
                  <span className="mx-6 inline-block w-0.5 h-3 bg-gray-300"></span>
                </li>
                <li className="flex items-center">
                  <Link
                    to="/users/register"
                    className="text-xs text-gray-500 font-medium outline-none"
                  >
                    회원가입
                  </Link>
                </li>
              </ul>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Login;
