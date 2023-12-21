import PropTypes from 'prop-types';

export default function Marquee({text}) {
  return (
    <div className="marquee">
        <div className="track">
          <div className="content text-[17rem] [line-height:14rem] font-medium tracking-tighter">&nbsp; {text} &nbsp;&nbsp;{text}&nbsp;&nbsp; {text}&nbsp;&nbsp; {text}&nbsp;</div>
        </div>
      </div>
  )
}

Marquee.propTypes = {
    text: PropTypes.string
};