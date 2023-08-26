import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import pb from '@/api/pocketbase';
import { Link } from 'react-router-dom';
import debounce from '@/utils/debounce';
import Logo from '@/components/Logo';

function SignUp() {
  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const handleRegister = async (e) => {
    e.preventDefault();
    const { password, passwordConfirm } = formState;

    if (password !== passwordConfirm) {
      alert('비밀번호가 일치하지 않습니다. 다시 확인해보세요.');
    }

    // PocketBase SDK 인증 요청
    await pb.collection('users').create({
      ...formState,
      emailVisibility: true,
    });

    navigate('/');
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
      className="h-screen"
      style={{ background: 'white', height: 'calc(var(--vh, 1vh) * 100)' }}
    >
      <div className="flex justify-center">
        <div className="my-12 rounded-lg WrapperScreen">
          <header>
            <Link to="/" className="block">
              <Logo width={'135px'} height={'20px'} />
            </Link>
          </header>
          <main className="mt-10">
            <h2 className="text-lg font-bold">회원가입</h2>
            <form>
              <section className="mt-6 space-y-5">
                <div>
                  <label htmlFor="name" className="inline-block text-xs font-semibold mb-2">이름</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    defaultValue={formState.name}
                    onChange={handleDebounceInput}
                    className="border border-gray-300 rounded-lg w-full p-3 mt-2 text-sm placeholder-gray-500 focus:outline-none focus:border-gray-600 focus:ring-0"
                    placeholder="이름을 입력해주세요"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="inline-block text-xs font-semibold mb-2">아이디</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    defaultValue={formState.email}
                    onChange={handleDebounceInput}
                    className="border border-gray-300 rounded-lg w-full p-3 mt-2 text-sm placeholder-gray-500 focus:outline-none focus:border-gray-600 focus:ring-0"
                    placeholder="예) likelion@gmail.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="inline-block text-xs font-semibold mb-2">
                    휴대폰 번호
                  </label>
                  <div className="flex space-x-2">
                    <div className="w-full">
                      <input
                        type="tel"
                        name="phone"
                        id='phone'
                        className="border border-gray-300 focus:border-gray-600 block w-full rounded-lg p-3 text-sm placeholder-gray-500 focus:outline-none focus:ring-0"
                        placeholder="-없이 숫자만 입력해주세요."
                        required=""
                        defaultValue=""
                      />
                    </div>
                    <button
                      type="button"
                      className="flex-shrink-0 p-3 px-4
                                      border border-orange-500 rounded-lg
                                      text-orange-500 flex items-center
                                      justify-center"
                    >
                      <span className="text-sm font-semibold">인증하기</span>
                    </button>
                  </div>
                  <div className="flex space-x-2 mt-2">
                    <div className="relative w-full">
                      <input
                        type="text"
                        name="pin"
                        autoComplete="one-time-code"
                        className="border border-gray-300 focus:border-gray-600 block w-full border-gray-300 rounded-lg p-3 text-sm placeholder-gray-500 focus:outline-none focus:border-gray-600 focus:ring-0"
                        readOnly=""
                        defaultValue=""
                      />
                    </div>
                    <button
                      type="button"
                      className=" bg-opacity-50 cursor-not-allowed flex-shrink-0 py-3 px-4 bg-orange-500 rounded-lg text-white flex items-center justify-center"
                      disabled=""
                    >
                      <span className="text-sm font-semibold">
                        인증번호 확인
                      </span>
                    </button>
                  </div>
                  <ul className="mt-2 text-gray-500 text-sm " />
                </div>
                <div>
                  <label htmlFor='password' className="inline-block text-xs font-semibold mb-2">
                    비밀번호
                  </label>
                  <input
                    type="password"
                    name="password"
                    id='password'
                    className="border rounded-lg border-gray-300 block w-full p-3 text-sm placeholder-gray-500 focus:outline-none focus:border-gray-600 focus:ring-0"
                    placeholder="영문/숫자/특수문자를 조합 (6 ~ 16자)"
                    required
                    defaultValue={formState.password}
                    onChange={handleDebounceInput}
                  />
                </div>
                <div>
                  <label htmlFor='passwordCheck' className="inline-block text-xs font-semibold mb-2">
                    비밀번호 확인
                  </label>
                  <input
                    type="password"
                    name="passwordCheck"
                    id="passwordCheck"
                    className="border rounded-lg border-gray-300 block w-full p-3 text-sm placeholder-gray-500 focus:outline-none focus:border-gray-600 focus:ring-0"
                    placeholder="비밀번호를 다시 한 번 입력해주세요"
                    required
                    defaultValue=""
                    onChange={handleDebounceInput}
                  />
                </div>
              </section>
              <div className="mt-10 flex items-center">
                <input
                  type="checkbox"
                  id="checkbox"
                  className="border-gray-500 rounded border-2 appearance-none text-orange-500 checked:bg-orange-500 checked:border-transparent focus:outline-none focus:ring-transparent"
                  style={{ width: 18, height: 18 }}
                />
                <span className="inline-block ml-2 text-base font-bold">
                  전체동의
                </span>
              </div>
              <hr className="my-3" />
              <div>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    {' '}
                    <input
                      type="checkbox"
                      className="border-gray-500 rounded border-2 appearance-none text-orange-500 checked:bg-orange-500 checked:border-transparent focus:outline-none focus:ring-transparent"
                      style={{ width: 18, height: 18 }}
                    />
                    <span className="inline-block ml-2 text-sm">
                      서비스 이용약관 동의 (필수)
                    </span>
                    <a
                      href="https://likelion.notion.site/PROJECT-LION-89ba1354b98d4825af14109aebdd3af9"
                      className="ml-auto flex text-gray-500 space-x-2 text-sm items-center"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                    >
                      상세보기
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-4 h-auto rightarrow"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                  </li>
                  <li className="flex items-center">
                    {' '}
                    <input
                      type="checkbox"
                      className="border-gray-500 rounded border-2 appearance-none text-orange-500 checked:bg-orange-500 checked:border-transparent focus:outline-none focus:ring-transparent"
                      style={{ width: 18, height: 18 }}
                    />
                    <span className="inline-block ml-2 text-sm">
                      개인정보 수집 및 이용 동의 (필수)
                    </span>
                    <a
                      href="https://likelion.notion.site/LIKELION-4d3c7ce22a724b3c99950e853dc7589b"
                      className="ml-auto flex text-gray-500 space-x-2 text-sm items-center"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                    >
                      상세보기
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-4 h-auto rightarrow"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                  </li>
                  <li className="flex items-center">
                    {' '}
                    <input
                      type="checkbox"
                      className="border-gray-500 rounded border-2 appearance-none text-orange-500 checked:bg-orange-500 checked:border-transparent focus:outline-none focus:ring-transparent"
                      style={{ width: 18, height: 18 }}
                    />
                    <span className="inline-block ml-2 text-sm">
                      만 14세 이상입니다 (필수)
                    </span>
                  </li>
                  <li className="flex items-center">
                    {' '}
                    <input
                      type="checkbox"
                      className="border-gray-500 rounded border-2 appearance-none text-orange-500 checked:bg-orange-500 checked:border-transparent focus:outline-none focus:ring-transparent"
                      style={{ width: 18, height: 18 }}
                    />
                    <span className="inline-block ml-2 text-sm">
                      광고성 정보 수신 동의 (선택)
                    </span>
                  </li>
                </ul>
                <div className="mt-8">
                  <button
                    className="flex justify-center py-3 items-center w-full rounded-lg bg-orange-500 bg-opacity-50 cursor-not-allowed"
                    type="button"
                    disabled=""
                  >
                    <span className="text-white text-sm font-semibold">
                      확인
                    </span>
                  </button>
                </div>
              </div>
            </form>
          </main>
        </div>
      </div>
    </div>

    // <div role="screenWrapper" className="h-screen" >
    //   <div className='flex justify-center'>
    //     <div className="my-12 w-80">
    //       <Link to="/" className="block">
    //         <Logo width={'135px'} height={'20px'} />
    //       </Link>
    //       <main className="mt-10">
    //         <h2 className="font-semibold text-lg">회원가입</h2>
    //         <form
    //           onSubmit={handleRegister}
    //           className="flex flex-col gap-2 mt-2 justify-start items-start p-3"
    //         >
    //           <div>

    //           </div>
    //           <div>

    //           </div>
    //           <div>
    //             <label htmlFor="phoneNumber">휴대폰 번호</label>
    //             <div className="flex space-x-2 mt-2">
    //               <div className="w-full">
    //                 <input
    //                   type="number"
    //                   name="phoneNumber"
    //                   id="phoneNumber"
    //                   defaultValue={formState.password}
    //                   onChange={handleDebounceInput}
    //                   className="border border-gray-300 rounded-lg w-full p-3 mt-2 text-sm placeholder-gray-500 focus:outline-none focus:border-gray-600 focus:ring-0"
    //                   placeholder="-없이 숫자만 입력해주세요."
    //                 />
    //               </div>
    //             </div>
    //             <button
    //               type="button"
    //               className="flex-shrink-0 p-3 px-4 text-sm font-semibold
    //                                               border border-orange-500 rounded-lg
    //                                               text-orange-500 flex items-center
    //                                               justify-center"
    //             >
    //               인증하기
    //             </button>
    //           </div>
    //           <div>
    //             <label htmlFor="password">패스워드</label>
    //             <input
    //               type="password"
    //               name="password"
    //               id="password"
    //               className="border border-gray-300 rounded-lg w-full p-3 mt-2 text-sm placeholder-gray-500 focus:outline-none focus:border-gray-600 focus:ring-0"
    //             />
    //           </div>
    //           <div>
    //             <label htmlFor="passwordConfirm">패스워드 확인</label>
    //             <input
    //               type="password"
    //               name="passwordConfirm"
    //               id="passwordConfirm"
    //               defaultValue={formState.passwordConfirm}
    //               onChange={handleDebounceInput}
    //               className="border border-gray-300 rounded-lg w-full p-3 mt-2 text-sm placeholder-gray-500 focus:outline-none focus:border-gray-600 focus:ring-0"
    //             />
    //           </div>
    //           <div className="flex gap-2">
    //             <button type="submit" className="disabled:cursor-not-allowed">
    //               가입
    //             </button>
    //             <button type="reset">취소</button>
    //           </div>
    //         </form>
    //       </main>
    //     </div>
    //   </div>
    // </div>
  );
}

export default SignUp;
