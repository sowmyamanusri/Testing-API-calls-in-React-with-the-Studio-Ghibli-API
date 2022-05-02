import { render, screen,waitFor } from '@testing-library/react';
import App from './App';
import {rest} from 'msw';
import {setupServer} from 'msw/node';
import '@testing-library/jest-dom';


const server = setupServer(
  rest.get('https://ghibliapi.herokuapp.com/films', (req, res, ctx) => {
    return res(
      ctx.delay(1500),
      ctx.status(202, 'Mocked status'),
      ctx.json([{           
        id: "2baf70d1-42bb-4437-b551-e5fed5a87abe",
        title: "Castle in the Sky",
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/npOnzAbLh6VOIu3naU5QaEcTepo.jpg"
    }]))
  }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())
	

test('renders check for GhilbliFilms text',async()=>{
  render(<App />);
 const text = screen.getByText(/GhilbliFilms/i);
  expect(text).toBeInTheDocument();

})

test('render the id of the first film',async()=>{
  render(<App />);
  await waitFor(()=>screen.findAllByText("Castle in the Sky"),{timeout:8000});
  const id = screen.getByText(/2baf70d1-42bb-4437-b551-e5fed5a87abe/i);
  expect(id).toBeInTheDocument();

},10000);

test('render the title of the first film',async()=>{
  render(<App />);
  await waitFor(()=>screen.findByRole('img', { name: /castle in the sky/i }),{timeout:8000});
  const id = screen.getByText(/castle in the sky/i);
  expect(id).toBeInTheDocument();

},10000);

