import PropTypes from "prop-types";

const UserDash = ({ className = "" }) => {
  return (
    <div
      className={`absolute w-[calc(100%_-_164px)] top-[calc(50%_+_171px)] right-[35px] left-[129px] rounded-3xs bg-gray-200 h-[420px] text-left text-9xl text-white font-kdam-thmor ${className}`}
    >
      <div className="absolute top-[calc(50%_-_184px)] right-[900px] w-[307px] h-[369px] overflow-hidden text-6xl">
        <div className="absolute top-[57px] left-[16px] inline-block w-[301px] h-[23px]">
          employee@gmail.com
        </div>
        <div className="absolute top-[116px] left-[16px] inline-block w-[301px] h-8">
          employee@gmail.com
        </div>
        <div className="absolute top-[178px] left-[16px] inline-block w-[301px] h-[29px]">
          employee@gmail.com
        </div>
        <div className="absolute top-[238px] left-[16px] inline-block w-[301px] h-[29px]">
          employee@gmail.com
        </div>
        <div className="absolute top-[302px] left-[16px] inline-block w-[301px] h-[29px]">
          employee@gmail.com
        </div>
        <div className="absolute top-[3px] left-[16px] text-9xl inline-block w-[88px] h-6">
          Email
        </div>
      </div>

      <div className="absolute top-[calc(50%_-_184px)] left-[45px] w-[45px] h-[349px] overflow-hidden">
        <input
          className="m-0 absolute top-[12px] left-[10px] w-[26px] h-6"
          type="checkbox"
        />
        <input
          className="m-0 absolute top-[66px] left-[10px] w-[26px] h-6"
          type="checkbox"
        />
        <input
          className="m-0 absolute top-[120px] left-[10px] w-[26px] h-6"
          type="checkbox"
        />
        <input
          className="m-0 absolute top-[184px] left-[10px] w-[26px] h-6"
          type="checkbox"
        />
        <input
          className="m-0 absolute top-[247px] left-[10px] w-[26px] h-6"
          type="checkbox"
        />
        <input
          className="m-0 absolute top-[314px] left-[10px] w-[26px] h-6"
          type="checkbox"
        />
      </div>
      <div className="absolute top-[calc(50%_-_182px)] left-[300px] w-[73px] h-[336px] overflow-hidden">
        <div className="absolute left-[20px] inline-block w-[51px] h-6">
         ID
        </div>
        <div className="absolute top-[54px] left-[22px] inline-block w-[51px] h-6">
          1
        </div>
        <div className="absolute top-[110px] left-[22px] inline-block w-[51px] h-6">
          2
        </div>
        <div className="absolute top-[170px] left-[22px] inline-block w-[51px] h-6">
          3
        </div>
        <div className="absolute top-[235px] left-[22px] inline-block w-[51px] h-6">
          4
        </div>
        <div className="absolute top-[300px] left-[22px] inline-block w-[51px] h-6">
          5
        </div>
      </div>
      <div className="absolute top-[calc(50%_-_186px)] right-[1500px] w-[86px] h-[363px] overflow-hidden">
        <img
          className="absolute top-[53px] left-[18px] rounded-[50%] w-[47px] h-[47px] object-cover"
          alt=""
          src="/ellipse-2@2x.png"
        />
        <img
          className="absolute top-[108px] left-[18px] rounded-[50%] w-[47px] h-[47px] object-cover"
          alt=""
          src="/ellipse-3@2x.png"
        />
        <img
          className="absolute top-[168px] left-[18px] rounded-[50%] w-[47px] h-[47px] object-cover"
          alt=""
          src="/ellipse-4@2x.png"
        />
        <img
          className="absolute top-[232px] left-[18px] rounded-[50%] w-[47px] h-[47px] object-cover"
          alt=""
          src="/ellipse-5@2x.png"
        />
        <img
          className="absolute top-[298px] left-[16px] w-[47px] h-[47px] object-cover"
          alt=""
          src="/ellipse-6@2x.png"
        />
        <div className="absolute top-[0px] left-[11px] inline-block w-[63px] h-10">
          User
        </div>
      </div>
      <div className="absolute top-[calc(50%_-_188px)] right-[550px] w-36 h-[367px] overflow-hidden text-lg">
        <div className="absolute top-[0px] left-[34px] text-9xl inline-block w-[88px] h-6">
          Role
        </div>
        <div className="absolute top-[63px] left-[9px] rounded-6xl bg-darkgreen w-[113px] h-[31px]" />
        <div className="absolute top-[117px] left-[9px] rounded-6xl bg-darkgreen w-[113px] h-[31px]" />
        <div className="absolute top-[184px] left-[9px] rounded-6xl bg-darkgreen w-[113px] h-[31px]" />
        <div className="absolute top-[245px] left-[9px] rounded-6xl bg-darkgreen w-[113px] h-[31px]" />
        <div className="absolute top-[306px] left-[9px] rounded-6xl bg-darkgreen w-[113px] h-[31px]" />
        <div className="absolute top-[63px] left-[22px] inline-block w-[100px] h-6">
          Employee
        </div>
        <div className="absolute top-[116px] left-[22px] inline-block w-[100px] h-6">
          Employee
        </div>
        <div className="absolute top-[184px] left-[22px] inline-block w-[100px] h-6">
          Employee
        </div>
        <div className="absolute top-[246px] left-[22px] inline-block w-[100px] h-6">
          Employee
        </div>
        <div className="absolute top-[308px] left-[22px] inline-block w-[100px] h-6">
          Employee
        </div>
      </div>
      <div className="absolute top-[calc(50%_-_188px)] right-[162px] w-36 h-[367px] overflow-hidden text-lg">
        <div className="absolute top-[2px] left-[22px] text-9xl inline-block w-[88px] h-[39px]">
          Status
        </div>
        <div className="absolute top-[63px] left-[9px] rounded-6xl bg-darkgreen w-[113px] h-[31px]" />
        <div className="absolute top-[117px] left-[9px] rounded-6xl bg-darkgreen w-[113px] h-[31px]" />
        <div className="absolute top-[184px] left-[9px] rounded-6xl bg-darkgreen w-[113px] h-[31px]" />
        <div className="absolute top-[245px] left-[9px] rounded-6xl bg-darkgreen w-[113px] h-[31px]" />
        <div className="absolute top-[306px] left-[9px] rounded-6xl bg-darkgreen w-[113px] h-[31px]" />
        <div className="absolute top-[63px] left-[36px] inline-block w-14 h-6">
          Online
        </div>
        <div className="absolute top-[116px] left-[36px] inline-block w-14 h-6">
          Online
        </div>
        <div className="absolute top-[184px] left-[36px] inline-block w-14 h-6">
          Online
        </div>
        <div className="absolute top-[244px] left-[38px] inline-block w-14 h-6">
          Online
        </div>
        <div className="absolute top-[306px] left-[37px] inline-block w-[57px] h-6">
          Online
        </div>
      </div>
    </div>
  );
};

UserDash.propTypes = {
  className: PropTypes.string,
};

export default UserDash;
