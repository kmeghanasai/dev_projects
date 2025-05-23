import 'package:flutter/material.dart';
import '../widgets/rounded_text_field.dart';
import '../widgets/auth_button.dart';
import '../widgets/auth_footer.dart';

class LoginPage extends StatefulWidget {
  const LoginPage({super.key});

  @override
  State<LoginPage> createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xaa5e8c61),
      body: Center(
        child: Padding(
          padding: const EdgeInsets.all(50),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              const RoundedTextField(
                hintText: 'Enter your username',
                prefixIcon: Icons.person,
              ),
              const SizedBox(height: 10),
              const RoundedTextField(
                hintText: 'Enter your password',
                prefixIcon: Icons.lock,
                obscureText: true,
              ),
              const SizedBox(height: 15),
              AuthButton(
                text: 'Login',
                onPressed: () {
                  ScaffoldMessenger.of(context).showSnackBar(
                    const SnackBar(content: Text('Login button pressed')),
                  );
                },
              ),
              const SizedBox(height: 10),
              AuthFooter(
                promptText: "Don't have an account?",
                actionText: 'Sign up',
                onActionPressed: () {
                  // Add navigation to signup page
                },
              ),
            ],
          ),
        ),
      ),
    );
  }
}