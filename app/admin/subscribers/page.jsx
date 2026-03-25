export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export default async function SubscribersPage() {
  // Temporarily simplified to test if the page loads at all
  return (
    <div>
      <div className="mb-4">
        <h1>Subscribers - Test Page</h1>
        <p>This is a test to see if the page loads without database access.</p>
        <p>If you can see this message, the navigation is working but there may be a database issue.</p>
      </div>
    </div>
  );
}