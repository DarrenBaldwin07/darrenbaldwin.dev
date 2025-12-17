/**
 * Utility function to log all environment variables
 * Useful for debugging and understanding the application environment
 */
export function logEnvironmentVariables(): void {
	console.log('=== Environment Variables ===');
	console.log(`Node Environment: ${process.env.NODE_ENV}`);
	console.log(`Next.js Environment: ${process.env.NEXT_PUBLIC_ENV || 'not set'}`);

	// Log all environment variables
	const envVars = process.env;
	const keys = Object.keys(envVars).sort();

	console.log(`\nTotal environment variables: ${keys.length}`);
	console.log('\nAll environment variables:');

	keys.forEach((key) => {
		const value = envVars[key];
		// Mask sensitive values for security
		const isSensitive =
			key.toLowerCase().includes('secret') ||
			key.toLowerCase().includes('password') ||
			key.toLowerCase().includes('token') ||
			key.toLowerCase().includes('key') ||
			key.toLowerCase().includes('api');

		const displayValue = isSensitive ? '***MASKED***' : value;
		console.log(`  ${key}: ${displayValue}`);
	});

	console.log('==============================\n');
}

/**
 * Log environment variables grouped by category
 */
export function logEnvironmentVariablesGrouped(): void {
	console.log('=== Environment Variables (Grouped) ===');

	const envVars = process.env;
	const grouped: Record<string, Record<string, string>> = {};

	// Group environment variables by category
	Object.entries(envVars).forEach(([key, value]) => {
		const category = key.split('_')[0] || 'OTHER';
		if (!grouped[category]) {
			grouped[category] = {};
		}

		// Mask sensitive values
		const isSensitive =
			key.toLowerCase().includes('secret') ||
			key.toLowerCase().includes('password') ||
			key.toLowerCase().includes('token') ||
			key.toLowerCase().includes('key') ||
			key.toLowerCase().includes('api');

		grouped[category][key] = isSensitive ? '***MASKED***' : (value || '');
	});

	// Display grouped variables
	Object.entries(grouped)
		.sort()
		.forEach(([category, vars]) => {
			console.log(`\n[${category}]`);
			Object.entries(vars)
				.sort()
				.forEach(([key, value]) => {
					console.log(`  ${key}: ${value}`);
				});
		});

	console.log('\n==========================================\n');
}
