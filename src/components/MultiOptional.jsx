import { useContext } from "react";
import css from "./MultiOption.module.css";
import { CommonDataContext } from "../store/CommonData";
import { Link, useLocation } from "react-router-dom";
import checkIcon from "../assets/option/check.svg";
import Technology from "./Technology";
import FAQ from "./FAQ"

const MultiOptional = () => {
  const { megaDataStatus,homeFaq,taskFaq,collabFaq,hrFaq,siteFaq,copilotFaq,sideId } = useContext(CommonDataContext);
  console.log(homeFaq)
  console.log("DATA->",megaDataStatus);

  const location = useLocation();
  const routeMega = location?.state?.megaData;

  console.log("ROUTEMEGA=>",routeMega)
  
  const data =  routeMega ?? megaDataStatus;
  console.log("mega data used for MultiOptional:", data);
  return (
    <>
      {/* Section -1*/}
      <section>
        <div className={` ${css.containerWrapper}`}>
          <div className={`container ${css.outerContainer_1}`}>
            <div className={`row ${css.innerContainer_1}`}>
              <div className={`col-md-6 col-12 mt-5 ${css.mediaLeft}`}>
                <div className={css.leftUpper}>
                  <span className={css.leftUpperIconBox}>
                    <span className={css.leftUpperIconSpan}>
                      <svg
                        width="34"
                        height="34"
                        viewBox="0 0 34 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width="34"
                          height="34"
                          rx="17"
                          fill="url(#paint0_linear_5551_1199)"
                        ></rect>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M17.288 25.011c4.193 0 7.593-3.421 7.593-7.642 0-4.22-3.4-7.641-7.593-7.641-4.194 0-7.594 3.42-7.594 7.641 0 4.22 3.4 7.642 7.594 7.642zm-1.214-13.363a.212.212 0 0 0-.399 0l-.755 2.055a2.131 2.131 0 0 1-1.256 1.263l-2.042.761a.214.214 0 0 0 0 .401l2.042.76c.582.217 1.04.679 1.256 1.264l.755 2.056c.069.186.33.186.399 0l.756-2.056a2.131 2.131 0 0 1 1.255-1.263l2.043-.76a.214.214 0 0 0 0-.402l-2.043-.76a2.131 2.131 0 0 1-1.255-1.264l-.756-2.055zm4.34 5.94a.122.122 0 0 0-.23 0l-.438 1.188c-.124.338-.389.605-.725.73l-1.18.44a.124.124 0 0 0 0 .23l1.18.44c.336.126.6.392.725.73l.437 1.188c.04.108.19.108.23 0l.437-1.188c.124-.338.39-.604.725-.73l1.18-.44a.124.124 0 0 0 0-.23l-1.18-.44a1.232 1.232 0 0 1-.725-.73l-.437-1.188z"
                          fill="#fff"
                        ></path>
                        <path
                          d="M28.213 17.834c.746.032 1.332.67 1.22 1.412-.9 5.937-5.995 10.485-12.146 10.485C10.501 29.731 5 24.195 5 17.366 5 10.536 10.501 5 17.287 5c3.233 0 6.174 1.256 8.368 3.31.547.514.48 1.381-.087 1.873-.567.49-1.416.418-1.978-.077a9.509 9.509 0 0 0-6.303-2.38c-5.291 0-9.58 4.316-9.58 9.641s4.289 9.641 9.58 9.641c4.693 0 8.597-3.395 9.42-7.878.136-.741.758-1.329 1.506-1.296z"
                          fill="#fff"
                        ></path>
                        <defs>
                          <linearGradient
                            id="paint0_linear_5551_1199"
                            x1="0"
                            y1="0"
                            x2="34"
                            y2="34"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#8B5BFF"></stop>
                            <stop offset="1" stopColor="#D575FF"></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                    <span className={css.leftUpperText}>Free AI Assistant</span>
                  </span>
                </div>

                <h1>{data.h}</h1>
                <div className={css.leftDescription}>
                  {data.p}
                </div>
                <div className={css.sec1BtnWrapper}>
                  <Link to="/about" className={css.sec1Btn}>
                    REGISTRE FREE
                  </Link>
                </div>
              </div>
              <div className={`col-md-6 mt-5 col-12 ${css.commonBackContainer}`}>
                <div className={css.commanBackInnerContainer}>
                  <img src={data.i}></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section-2 */}

      <section>
        <div className={`row ${css.customRow}`}>
          <div className={css.rowInner}>
            <div className="col-12">
              <div className={css.contentWrapper}>
                <div>
                  <div className={css.textWrapper}>
                    <h4>{data.h1}</h4>
                    <p>
                    {data.p1}
                    </p>
                  </div>
                  <div className={css.mediaContentWrapper}>
                    <div className={css.mediaImgContainer}>
                      <img src={data.i1} />
                    </div>
                    <div>
                      <li>
                        <img src={checkIcon} />
                        <div>
                          {data.l1}
                        </div>
                        
                        
                      </li>

                      <li>
                        <img src={checkIcon} />
                        <div>{data.l2}</div>
                        
                      </li>

                      <li>
                        <img src={checkIcon} />
                        <div>{data.l3}</div>
                       
                      </li>

                      <li>
                        <img src={checkIcon} />
                        <div>{data.l4}</div>
                        
                      </li>

                    </div>
                  </div>

                  <section>
                    <div className={css.cardGrid}>
                      <div
                        className="card"
                        
                      >
                        <div className={`card-body ${css.cardText}`}>
                          <h5 className="card-title">
                            {data.c1h}
                          </h5>
                          <p className="card-text">
                            {data.c1p}
                          </p>
                        </div>
                        <img
                          src={data.c1i}
                          className="card-img-top"
                          alt="multiple sources"
                        />
                      </div>

                      <div
                        className="card"
                        
                      >
                        <div className={`card-body ${css.cardText}`}>
                          <h5 className="card-title">
                           {data.c2h}
                          </h5>
                          <p className="card-text">
                            {data.c2p}
                          </p>
                        </div>
                        <img
                          src={data.c2i}
                          width="30px"
                          className="card-img-top"
                          alt="..."
                        />
                      </div>

                      <div
                        className="card"
                        
                      >
                        <div className={`card-body ${css.cardText}`}>
                          <h5 className="card-title">
                            {data.c3h}
                          </h5>
                          <p className="card-text">
                           {data.c3p}
                          </p>
                        </div>
                        <img
                          src={data.c3i}
                          width="30px"
                          className="card-img-top"
                          alt="..."
                        />
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={`row ${css.customRow}`}>
          <div className={css.rowInner}>
            <div className="col-12">
              <div className={css.contentWrapper}>
                <div>
                  <div className={css.textWrapper}>
                    <h4>{data.h2}</h4>
                    <p>
                      {data.p2}
                    </p>
                  </div>
                  <div className={css.mediaContentWrapper}>
                    <div className={css.mediaImgContainer}>
                      <img src={data.i2} />
                    </div>
                    <div>
                      <li>
                        <img src={checkIcon} />
                        <span>{data.l5}</span>
                      </li>
                      <li>
                        <img src={checkIcon} />
                        <div>{data.l6}</div>
                      </li>
                      <li>
                        <img src={checkIcon} />
                        <div>{data.l7}</div>
                      </li>
                      <li>
                        <img src={checkIcon} />
                        <div>{data.l8}</div>
                      </li>
                      <li>
                        <img src={checkIcon} />
                        <div>{data.l9}</div>
                      </li>
                    </div>
                  </div>

                  {/* Section-3 */}

                  <section>
                    <div className={css.cardGrid}>
                      <div
                        className="card"
                       
                      >
                        <div className={`card-body ${css.cardText}`}>
                          <h5 className="card-title">
                           {data.c4h}
                          </h5>
                          <p className="card-text">
                           {data.c4p}
                          </p>
                        </div>
                        <img
                          src={data.c4i}
                          width="30px"
                          className="card-img-top"
                          alt="..."
                        />
                      </div>

                      <div
                        className="card"
                        
                      >
                        <div className={`card-body ${css.cardText}`}>
                          <h5 className="card-title">
                            {data.c5h}
                          </h5>
                          <p className="card-text">
                            {data.c5p}
                          </p>
                        </div>
                        <img
                          src={data.c5i}
                          width="30px"
                          className="card-img-top"
                          alt="..."
                        />
                      </div>

                      <div
                        className="card"
                        
                      >
                        <div className={`card-body ${css.cardText}`}>
                          <h5 className="card-title">
                            {data.c6h}
                          </h5>
                          <p className="card-text">
                            {data.c6p}
                          </p>
                        </div>
                        <img
                          src={data.c6i}
                          width="30px"
                          className="card-img-top"
                          alt="..."
                        />
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section-4 */}
      <section>
        <div className={`row ${css.customRow}`}>
          <div className={css.rowInner}>
            <div className="col-12">
              <div className={css.contentWrapper}>
                <div>
                  <div className={css.textWrapper}>
                    <h4>{data.h3}</h4>
                    <p>
                      {data.p3}
                    </p>
                  </div>
                  <div className={css.mediaContentWrapper}>
                    <div className={css.mediaImgContainer}>
                      <img src={data.i3} />
                    </div>
                    <div>
                      <li>
                        <img src={checkIcon} />
                        <div>{data.l10}</div>
                      </li>
                      <li>
                        <img src={checkIcon} />
                        <div>{data.l11}</div>
                      </li>
                      <li>
                        <img src={checkIcon} />
                        <div>{data.l12}</div>
                      </li>
                      <li>
                        <img src={checkIcon} />
                        <div>{data.l13}</div>
                      </li>
                      <li>
                        <img src={checkIcon} />
                        <div>{data.l14}</div>
                      </li>

                    </div>
                  </div>

                  <section>
                    <div className={css.cardGrid}>
                      <div
                        className="card"
                        
                      >
                        <div className={`card-body ${css.cardText}`}>
                          <h5 className="card-title">
                           {data.c7h}
                          </h5>
                          <p className="card-text">
                            {data.c7p}
                          </p>
                        </div>
                        <img
                          src={data.c7i}
                          width="30px"
                          className="card-img-top"
                          alt="..."
                        />
                      </div>

                      <div
                        className="card"
                        
                      >
                        <div className={`card-body ${css.cardText}`}>
                          <h5 className="card-title">
                            {data.c8h}
                          </h5>
                          <p className="card-text">
                            {data.c8p}
                          </p>
                        </div>
                        <img
                          src={data.c8i}
                          width="30px"
                          className="card-img-top"
                          alt="..."
                        />
                      </div>

                      <div
                        className="card"
                        
                      >
                        <div className={`card-body ${css.cardText}`}>
                          <h5 className="card-title">
                            {data.c9h}
                          </h5>
                          <p className="card-text">
                            {data.c9p}
                          </p>
                        </div>
                        <img
                          src={data.c9i}
                          width="30px"
                          className="card-img-top"
                          alt="..."
                        />
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section-5 */}
      {data.h4 &&
      <section>
        <div className={`row ${css.customRow}`}>
          <div className={css.rowInner}>
            <div className="col-12">
              <div className={css.contentWrapper}>
                <div>
                  <div className={css.textWrapper}>
                    <h4>{data.h4}</h4>
                    <p>
                      {data.p4}
                    </p>
                  </div>
                  <div className={css.mediaContentWrapper}>
                    <div className={css.mediaImgContainer}>
                      <img src={data.i4} />
                    </div>
                    <div>
                      <li>
                        <img src={checkIcon} />
                        <div>{data.l15}</div>
                      </li>
                      <li>
                        <img src={checkIcon} />
                        <div>{data.l16}</div>
                      </li>
                      <li>
                        <img src={checkIcon} />
                        <div>{data.l17}</div>
                      </li>
                      <li>
                        <img src={checkIcon} />
                        <div>{data.l18}</div>
                      </li>
                    </div>
                  </div>

                  <section>
                    <div className={css.cardGrid}>
                      <div
                        className="card"
                        
                      >
                        <div className={`card-body ${css.cardText}`}>
                          <h5 className="card-title">
                            {data.c10h}
                          </h5>
                          <p className="card-text">
                           {data.c10p}
                          </p>
                        </div>
                        <img
                          src={data.c10i}
                          width="30px"
                          className="card-img-top"
                          alt="..."
                        />
                      </div>

                      <div
                        className="card"
                        
                      >
                        <div className={`card-body ${css.cardText}`}>
                          <h5 className="card-title">
                           {data.c11h}
                          </h5>
                          <p className="card-text">
                           {data.c11p}
                          </p>
                        </div>
                        <img
                          src={data.c11i}
                          width="30px"
                          className="card-img-top"
                          alt="..."
                        />
                      </div>

                      <div
                        className="card"
                        
                      >
                        <div className={`card-body ${css.cardText}`}>
                          <h5 className="card-title">
                            {data.c12h}
                          </h5>
                          <p className="card-text">
                            {data.c12p}
                          </p>
                        </div>
                        <img
                          src={data.c12i                                     }
                          width="30px"
                          className="card-img-top"
                          alt="..."
                        />
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
}
      {/* section-6 */}
{data.h5&&
      <section>
        <div className={`row ${css.customRow } `} >
          <div className={css.rowInner}>
            <div className="col-12">
              <div className={css.contentWrapper}>
                <div>
                  <div className={css.textWrapper}>
                    <h4>{data.h5}</h4>
                    <p>
                      {data.p5}
                    </p>
                  </div>
                  <div className={css.mediaContentWrapper}>
                    <div className={css.mediaImgContainer}>
                      <img src={data.i5} />
                    </div>
                    <div>
                      <li>
                        <img src={checkIcon} />
                        <span>{data.l19}</span>
                      </li>
                      <li>
                        <img src={checkIcon} />
                        <div>{data.l20}</div>
                      </li>
                      <li>
                        <img src={checkIcon} />
                        <div>{data.l21}</div>
                      </li>
                      <li>
                        <img src={checkIcon} />
                        <div>{data.l22}</div>
                      </li>
                    </div>
                  </div>

                  <section>
                    <div className={css.cardGrid}>
                      <div
                        className="card"
                        
                      >
                        <div className={`card-body ${css.cardText}`}>
                          <h5 className="card-title">
                           {data.c13h}
                          </h5>
                          <p className="card-text">
                          {data.c13p}
                          </p>
                        </div>
                        <img
                          src={data.c13i}
                          width="30px"
                          className="card-img-top"
                          alt="..."
                        />
                      </div>

                      <div
                        className="card"
                        
                      >
                        <div className={`card-body ${css.cardText}`}>
                          <h5 className="card-title">
                            {data.c14h}
                          </h5>
                          <p className="card-text">
                           {data.c14p}
                          </p>
                        </div>
                        <img
                          src={data.c14i}
                          width="30px"
                          className="card-img-top"
                          alt="..."
                        />
                      </div>

                      <div
                        className="card"
                        
                      >
                        <div className={`card-body ${css.cardText}`}>
                          <h5 className="card-title">
                           {data.c15h}
                          </h5>
                          <p className="card-text">
                            {data.c15p}
                          </p>
                        </div>
                        <img
                          src={data.c15i}
                          width="30px"
                          className="card-img-top"
                          alt="..."
                        />
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>}
      <div className={css.technology}>
        <Technology className={css.technology}/>
      </div>
      {sideId==="0"&&<FAQ faq={homeFaq}/>}
      {sideId==="1"&&<FAQ faq={collabFaq}/>}
      {sideId==="2"&&<FAQ faq={taskFaq}/>}
      {sideId==="3"&&<FAQ faq={siteFaq}/>}
      {sideId==="4"&&<FAQ faq={hrFaq}/>}
      {sideId==="5"&&<FAQ faq={copilotFaq}/>}
      <div style={{marginBottom:"200px"}}></div>
    </>
  );
};

export default MultiOptional;
