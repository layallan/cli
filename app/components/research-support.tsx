/* eslint-disable @next/next/no-img-element */
const images = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images`;

export function ResearchSupport() {
  return (
    <>
      <p className="support-note">We thank Lambda and Google for supporting our research.</p>
      <div className="supporter-logos">
        <a className="supporter-lambda" href="https://lambda.com/">
          <img src={`${images}/supporters/lambda.svg`} alt="Lambda" width="150" height="32" />
        </a>
        <a href="https://www.google.com/">
          <img src={`${images}/supporters/google.png`} alt="Google" width="112" height="38" />
        </a>
      </div>
    </>
  );
}
