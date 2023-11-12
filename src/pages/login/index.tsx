import styles from "./login.module.less";
import LoginForm from "./LoginForm";

function Login() {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <div className={styles.loginLeft}>
          <img src="/side-logo.png" />
        </div>
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
