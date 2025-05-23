import 'package:carbon_footprint_tracker/Pages/login_page.dart';
import 'package:carbon_footprint_tracker/Pages/emissions.dart';
import 'package:carbon_footprint_tracker/Pages/dashboard_screen.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      routes: {
        '/':(context) => const LoginPage(),
        '/dashboard':(context) => const DashboardScreen(),
        
      },
    );
  }
}



