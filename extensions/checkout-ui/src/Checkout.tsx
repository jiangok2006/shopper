import {
  Banner,
  reactExtension,
  useApi,
  useTranslate,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.contact.render-after',
  () => <Extension />,
);

function Extension() {
  const translate = useTranslate();
  const { extension } = useApi();

  return (
    <Banner title="checkout-ui">
      {translate('welcome', { target: extension.target })}
    </Banner>
  );
}