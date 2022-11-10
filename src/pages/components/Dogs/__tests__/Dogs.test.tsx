import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MockedProvider } from '@apollo/client/testing';
import { AppApolloProvider } from 'providers';
import { getDogsQueryResponse } from 'graphql/queries/__mocks__/GetDogsQueryMock';
import { server } from 'graphql/__mocks__/server';
import { Dogs } from '../Dogs';

let user: ReturnType<typeof userEvent.setup>;
beforeEach(() => {
  user = userEvent.setup();
});

describe('Dogs with MockedProvider', () => {
  test('renders', async () => {
    render(
      <MockedProvider mocks={[getDogsQueryResponse(6)]}>
        <Dogs />
      </MockedProvider>
    );
    expect(await screen.findAllByText('Is a good boy?')).toHaveLength(6);
  });

  test('updates the quantity', async () => {
    render(
      <MockedProvider
        mocks={[getDogsQueryResponse(6), getDogsQueryResponse(16)]}
      >
        <Dogs />
      </MockedProvider>
    );

    expect(await screen.findAllByText('Is a good boy?')).toHaveLength(6);
    await user.type(screen.getByLabelText('Quantity'), '{ArrowLeft}1');
    expect(await screen.findAllByText('Is a good boy?')).toHaveLength(16);
  });
});

describe('Dogs with MockServiceWorker', () => {
  beforeAll(() => server.listen());
  afterEach(() => {
    server.resetHandlers();
    server.restoreHandlers();
  });
  afterAll(() => server.close());

  test('renders', async () => {
    render(
      <AppApolloProvider>
        <Dogs />
      </AppApolloProvider>
    );

    expect(await screen.findAllByText('Is a good boy?')).toHaveLength(6);
  });

  test('updates the quantity', async () => {
    render(
      <AppApolloProvider>
        <Dogs />
      </AppApolloProvider>
    );

    expect(await screen.findAllByText('Is a good boy?')).toHaveLength(6);
    await user.type(screen.getByLabelText('Quantity'), '{ArrowLeft}1');
    expect(await screen.findAllByText('Is a good boy?')).toHaveLength(16);
  });
});
