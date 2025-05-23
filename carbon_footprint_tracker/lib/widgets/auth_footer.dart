import 'package:flutter/material.dart';

class AuthFooter extends StatelessWidget {
  final String promptText;
  final String actionText;
  final VoidCallback onActionPressed;

  const AuthFooter({
    super.key,
    required this.promptText,
    required this.actionText,
    required this.onActionPressed,
  });

  @override
  Widget build(BuildContext context) {
    return Align(
      alignment: Alignment.centerRight,
      child: GestureDetector(
        onTap: onActionPressed,
        child: RichText(
          text: TextSpan(
            text: "$promptText ",
            style: const TextStyle(
              color: Colors.grey,
              fontSize: 14,
              fontWeight: FontWeight.bold,
            ),
            children: [
              TextSpan(
                text: actionText,
                style: const TextStyle(
                  color: Colors.black,
                  fontWeight: FontWeight.bold,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}