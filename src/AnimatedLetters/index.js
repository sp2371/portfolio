import './index.scss';
const AnimatedLetters = ({ letterClass, strArray, idx }) => {
    return (
        <span>
            {
                strArray.map((c,i) => (
                    <span key={c+i} className={`${letterClass} _${i+idx}`}>
                        {c}
                    </span>
                ))
            }
        </span>
    );
};
export default AnimatedLetters;