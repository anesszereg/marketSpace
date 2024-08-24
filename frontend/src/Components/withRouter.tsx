import { useLocation, useNavigate, useParams } from "react-router-dom";

function withRouter(Component: any) {
    function ComponentWithRouterProp(props: any) {
        let location = useLocation();
        let param = useParams();
        let navigate = useNavigate();
        return (
            <Component {...props} router={{ location, navigate, param }} />
        )
    }
    return ComponentWithRouterProp;
}

export default withRouter;