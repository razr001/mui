import { Button, Stack, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import styles from "./login.module.less";
import { useUserStore } from "@/store/UserStore";

function LoginForm() {
  const [lang] = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const login = useUserStore((state) => state.login);

  return (
    <div className={styles.loginForm}>
      <h2 className={styles.loginTitle}>Web Console</h2>
      <form
        onSubmit={handleSubmit((data) => login(data.username, data.password))}
      >
        <Stack spacing={2}>
          <TextField
            label={lang("username")}
            size="small"
            focused
            required
            {...register("username", { required: true })}
            error={!!errors["username"]}
          />
          <TextField
            label={lang("password")}
            required
            size="small"
            type="password"
            {...register("password", { required: true })}
            error={!!errors["password"]}
          />
          <Button variant="contained" type="submit">
            {lang("Submit")}
          </Button>
        </Stack>
      </form>
    </div>
  );
}

export default LoginForm;
