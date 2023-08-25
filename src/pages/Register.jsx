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
    <div role="screenWrapper" className="h-screen">
      <h2 className="font-semibold">회원가입</h2>
      <div className="flex flex-col items-center pt-12">
        <Link to="/" className="block">
          <Logo width={'135px'} height={'20px'} />
        </Link>
        <form
          onSubmit={handleRegister}
          className="flex flex-col gap-2 mt-2 justify-start items-start p-3"
        >
          <div>
            <label htmlFor="name">이름</label>
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
            <label htmlFor="email">아이디</label>
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
              <label htmlFor="phoneNumber">휴대폰 번호</label>
            <div className='flex space-x-2 mt-2'>
              <input
                type="number"
                name="phoneNumber"
                id="phoneNumber"
                defaultValue={formState.password}
                onChange={handleDebounceInput}
                className="border border-gray-300 rounded-lg w-full p-3 mt-2 text-sm placeholder-gray-500 focus:outline-none focus:border-gray-600 focus:ring-0"
                placeholder="-없이 숫자만 입력해주세요."
              />
            </div>
            <button
              type="button"
              className="flex-shrink-0 p-3 px-4 text-sm font-semibold
                                              border border-orange-500 rounded-lg
                                              text-orange-500 flex items-center
                                              justify-center"
            >
              인증하기
            </button>
          </div>
          <div>
            <label htmlFor="password">패스워드</label>
            <input
              type="password"
              name="password"
              id="password"
              defaultValue={formState.password}
              onChange={handleDebounceInput}
              className="border border-gray-300 rounded-lg w-full p-3 mt-2 text-sm placeholder-gray-500 focus:outline-none focus:border-gray-600 focus:ring-0"
            />
          </div>
          <div>
            <label htmlFor="passwordConfirm">패스워드 확인</label>
            <input
              type="password"
              name="passwordConfirm"
              id="passwordConfirm"
              defaultValue={formState.passwordConfirm}
              onChange={handleDebounceInput}
              className="border border-gray-300 rounded-lg w-full p-3 mt-2 text-sm placeholder-gray-500 focus:outline-none focus:border-gray-600 focus:ring-0"
            />
          </div>
          <div className="flex gap-2">
            <button type="submit" className="disabled:cursor-not-allowed">
              가입
            </button>
            <button type="reset">취소</button>
          </div>
        </form>
        <Link to="/signin" className="border border-gray-300 px-3 py-1">
          로그인
        </Link>
      </div>
    </div>
  );
}

export default SignUp;
