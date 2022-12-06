import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
    StyledFormGroup,
    StyledLabel,
    StyledAsterisk,
    StyledLink,
    StyledButton,

} from "../Styled/StyledFormUtils";
import { TextField } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginUser } from "../../store/auth";

const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).max(14).required(),
})

const LoginForm = () => {
    const { control, handleSubmit, formState: { errors }, } = useForm({
        resolver: yupResolver(schema),
    });

    const { isLoading } = useSelector((state) => state.auth);

    const onSubmit = data => {
        console.log(data)
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Login</h2>

                <StyledFormGroup>
                    <StyledLabel htmlFor="email">
                        Email <StyledAsterisk className="text-alert">*</StyledAsterisk>
                    </StyledLabel>
                    <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        render={({ field }) => <TextField
                            type="email"
                            fullWidth
                            {...field}
                            placeholder={"Enter Email here"}
                            size="small"
                            value={field.value}
                            error={!!errors.email}
                            helperText={errors.email ? errors.email?.message : ""}
                            sx={{
                                "& legend": { display: "none" },
                                "& fieldset": { top: 0 },
                            }}
                        />}
                    />
                </StyledFormGroup>
                <StyledFormGroup>
                    <StyledLabel htmlFor="password">
                        Password <StyledAsterisk className="text-alert">*</StyledAsterisk>
                    </StyledLabel>
                    <StyledLink to="/password_reset" className="text-right">
                        Forgot Password ?
                    </StyledLink>
                    <Controller
                        name="password"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                type="password"
                                fullWidth
                                {...field}
                                placeholder={"Enter password here"}
                                size="small"
                                error={!!errors.password}
                                helperText={errors.password ? errors.password?.message : ""}
                                value={field.value}
                                sx={{
                                    "& legend": { display: "none" },
                                    "& fieldset": { top: 0 },
                                }}
                            />
                        )}
                    />
                </StyledFormGroup>
                <StyledButton>
                    {isLoading ? <CircularProgress sx={{ color: "#fff" }} /> : "Login"}
                </StyledButton>
            </form>
        </div>
    );
};

export default LoginForm;
