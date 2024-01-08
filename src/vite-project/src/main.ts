import Handlebars from 'handlebars';
import  * as Components from './components';
import  * as Pages from './pages';


const pages = {
    login: [Pages.LoginPage],
    signup: [Pages.SignupPage]
};

Object.entries(Components).forEach(([name,component]) => {
    Handlebars.registerPartial(name,component);
});

function navigate (page:string) {
    const [source, content] = pages[page];
    const container = document.getElementById('app')!;
    container.innerHTML = Handlebars.compile(source)(content);
}

document.addEventListener('DOMContentLoaded', () => navigate('login'));

document.addEventListener('click', e => {
    const page = e.target.getAttribute('page');
    if (page) {
        navigate(page);

        e.preventDefault();
        e.stopImmediatePropagation();
    }
})

