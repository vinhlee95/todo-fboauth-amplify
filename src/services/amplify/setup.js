import Amplify from "aws-amplify";
import awsExports from "./aws-exports";

export const initAmplify = () => {
	Amplify.configure(awsExports);
}