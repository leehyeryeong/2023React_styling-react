import { Component } from 'react';
import styles from "./styles/CSSModule.module.css";
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const CSSModule = () => {
  return (
    <div className={cx("wrapper", "inverted")}>
      안녕하세요, 저는 <span className="something">CSS Module!</span>
      {/* CSSMoudle.module.css에서 :global로 클래스 이름을 설정하면 문자열 형태("something")으로 표시 */}
    </div>
  );
};

export default CSSModule;