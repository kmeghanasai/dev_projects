import 'package:flutter/material.dart';

class RoundedTextField extends StatelessWidget {
  final String hintText;
  final IconData prefixIcon;
  final bool obscureText;

  const RoundedTextField({
    super.key,
    required this.hintText,
    required this.prefixIcon,
    this.obscureText = false,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 300,
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(30),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withOpacity(0.2),
            spreadRadius: 0,
            blurRadius: 6,
            offset: const Offset(0, 4),
          ),
        ],
      ),
      child: TextField(
        obscureText: obscureText,
        decoration: InputDecoration(
          fillColor: Colors.white,
          filled: true,
          hintText: hintText,
          border: const OutlineInputBorder(
            borderRadius: BorderRadius.all(Radius.circular(30)),
          ),
          focusedBorder: OutlineInputBorder(
            borderRadius: BorderRadius.circular(30),
            borderSide: const BorderSide(
              color: Colors.black,
              width: 2,
            ),
          ),
          prefixIcon: Icon(prefixIcon),
          contentPadding: const EdgeInsets.symmetric(vertical: 7),
        ),
      ),
    );
  }
}